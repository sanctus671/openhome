import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-submissions',
  templateUrl: 'submissions.html'
})
export class SubmissionsPage {
    
    public submissions:any;
    
    constructor(public navCtrl: NavController, public storage: Storage) {
        
        this.submissions = [];
        
        this.storage.get("submissions").then((data) => {
            if (data){
                this.submissions = data;
            }
        })
        
    }

}
