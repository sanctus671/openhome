import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
    selector: 'lists',
    templateUrl: 'lists.html'
})

export class ListsModal {
    
    public lists: any;
    public properties: any;
    
    constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public storage: Storage) {
        this.properties = {list : params.data.list};
        this.lists = ["default"];
        this.storage.get('lists').then((data) => {
            if (data){
                this.lists = data;
            }
        })    
        
    }
    
    public addList(newList){
        console.log(newList);
        this.lists.push(newList);
        this.storage.set("lists", this.lists);
    }
    
    public removeList(ev,index){
        ev.preventDefault();
        ev.stopPropagation();        
        this.lists.splice(index,1);
    }  
    
    public selectList(list){
        this.properties.list = list;
        this.viewCtrl.dismiss(this.properties.list);
    }  
    

    dismiss() {
        this.viewCtrl.dismiss(false);
    }
}
