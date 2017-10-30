import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController, AlertController } from 'ionic-angular';
import {AddFieldModal} from '../../modals/fields/add-field';
import {EditFieldModal} from '../../modals/fields/edit-field';
import {ListsModal} from '../../modals/lists/lists';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    public fields: any;
    public submission: any;
    public properties: any;
    
    constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storage: Storage, public alertCtrl: AlertController) {
        this.fields = [];
        this.storage.get('fields').then((data) => {
            if (data){
                this.fields = data;
            }
            else{
                this.setupFields();
            }
            console.log(this.fields);
        })
        
        this.properties = {list:"default", live:false};

        this.storage.get('currentList').then((data) => {
            if (data){
                this.properties.list = data;
            }
        })   
        
        this.storage.get('isLive').then((data) => {
            if (data){
                this.properties.live = data;
            }
        })                      
        
    }
    
    
    private setupFields(){
        let fields = [
            {
                name:"name",
                label:"What is your name?",
                inputType: "text",
                required:true,
                order:1
            },
            {
                name:"email",
                label:"Email Address",
                inputType: "email",
                required:true,
                order:2
            },
            {
                name:"move",
                label:"When do you need to move?",
                inputType: "select",
                options: ["0-3 months", "4-8 months", ">6 months"],
                required:false,
                order:3
            }            
        ]
        
        this.storage.set('fields', fields);
        
        this.fields = fields;
    }

    
    public openAddFieldModal() {
        let modal = this.modalCtrl.create(AddFieldModal);
        modal.onDidDismiss(data => {
            console.log(data);
            if (!data){return;}
            this.fields.push(data);
            this.storage.set('fields', this.fields);   
        })        
        modal.present();
    }  
    
    
    public openEditFieldModal(field) {
        if (this.properties.live){return;}
        let modal = this.modalCtrl.create(EditFieldModal, field);
        modal.onDidDismiss(data => {
            console.log(data);
            if (!data){return;}
            for (var index in this.fields){
                if (this.fields[index].name === data.name){
                    this.fields[index] = data;
                }
            }
            console.log(this.fields);
            this.storage.set('fields', this.fields);           
        })        
        modal.present();
    }
    
    public openRemoveField(ev,index){
        ev.preventDefault();
        ev.stopPropagation();
        let alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to remove this field?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {}
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.fields.splice(index,1);
                        this.storage.set("fields", this.fields);
                    }
                }
            ]
        });
        alert.present();        
    }    
    
    public reorderFields(indexes) {
        let element = this.fields[indexes.from];
        this.fields.splice(indexes.from, 1);
        this.fields.splice(indexes.to, 0, element);
        for (var index in this.fields){
            this.fields[index].order = index + 1;
        }
        this.storage.set("fields", this.fields);
    }     
    
    public openChangeListModal() {
        let modal = this.modalCtrl.create(ListsModal, {list : this.properties.list});
        modal.onDidDismiss(data => {
            if (!data){return;}
            this.properties.list  = data;      
            this.storage.set("currentList", this.properties.list);   
        })        
        modal.present();
    }    
    
   
    saveToList(submissions){
        if (submissions[this.properties.list]){
            submissions[this.properties.list].push(this.submission);
        }
        else{
            submissions[this.properties.list] = [this.submission];
        }
        
        this.storage.set('submissions', submissions);
        
        this.submission = {};
        
    }
    
    public saveSubmission() {
        
        for (let field of this.fields){
            if (field.required && !field.enteredValue){
                
                const alert = this.alertCtrl.create({
                    title: 'Fields Required',
                    subTitle: "You havn't entered information into a field which is required. Please review and submit again.",
                    buttons: ['OK']
                });
                alert.present();                
                
                this.submission = {};
                return;
            }
            this.submission[field.name] = field.enteredValue;
        }
        
        this.storage.get('submissions').then((data)=> {
            if (data){
                this.saveToList(data);
            }
            else{
                this.saveToList(data);
            }
        })     
    }
    
    public goLive(){
        let alert = this.alertCtrl.create({
            title: 'Confirm',
            message: 'Are you sure you want to go live?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {}
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.properties.live = true;
                        this.storage.set("isLive", true);
                    }
                }
            ]
        });
        alert.present();        
    }
    
    public goEditMode(){
        this.properties.live = false;
        this.storage.set("isLive", false);        
    }

    
}


