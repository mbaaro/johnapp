import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { DataprovService } from '../dataprov.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
//password:string;
  constructor(private alertcontroller:AlertController,private dataprov:DataprovService ) {
this.verifyuser();
console.log(this.dataprov.password);
console.log(this.dataprov.getmessages());
  }

async verifyuser(){
//let the user enter the preset password to continue
const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      header: 'Enter Password to Proceed',
      inputs: [
        {
          name: 'pass',
          type: 'password',
          placeholder: 'Enter Password'
        }
      ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
        //  console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (alertData) => {
        //  console.log('Confirm Ok');
            console.log(alertData.pass);
        }
      }
    ]
  });

  await alert.present();
  }
}
