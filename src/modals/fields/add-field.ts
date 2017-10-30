import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
    selector: 'add-field',
    templateUrl: 'add-field.html'
})

export class AddFieldModal {
    
    public field: any;
    
    constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
        this.field = {
            name:"",
            label:"",
            inputType:"text",
            required:false,
            options:[],
            order:1
        }
    }
    
    public addOption(){
        this.field.options.push("");
    }
    
    public removeOption(index){
        this.field.options.splice(index,1);
    }    
    
    public addField(){
        this.viewCtrl.dismiss(this.field)
    }

    dismiss() {
        this.viewCtrl.dismiss(false);
    }
}
