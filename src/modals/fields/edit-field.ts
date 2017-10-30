import { Component } from '@angular/core';
import { NavController, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
    selector: 'edit-field',
    templateUrl: 'edit-field.html'
})

export class EditFieldModal {
    
    public field: any;
    
    constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
        console.log(params);
        this.field = {
            name:params.data.name,
            label:params.data.label,
            inputType:params.data.inputType,
            required:params.data.required,
            options:params.data.options ? params.data.options : [],
            order:params.data.order         
        };
        
        console.log(this.field);
    }
    
    
    public addOption(){
        this.field.options.push("");
    }
    
    public removeOption(index){
        this.field.options.splice(index,1);
    }   
    
    public updateField(){
        this.viewCtrl.dismiss(this.field)
    }    
     

    dismiss() {
        this.viewCtrl.dismiss(false);
    }
}
