import { Component } from '@angular/core';

import { ModalController,NavController } from '@ionic/angular';

import { DetailsPage } from '../details/details.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:string;
  password: String;
  
  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(private navCtrl: NavController
              

             ) {
   
              
              }

                public validate()
                {
                  
                  if(this.name==null && this.password==null){
                        alert("Enter the details");
                      }
                  if(this.name && this.password!=null)
                  {
                      
                      this.navCtrl.navigateRoot('/details');     
                     
                }
                 
  
                }
            
                public togglepassword()
                {
                  if(this.passwordShown){
                    this.passwordShown = false;
                    this.passwordType = 'password';
                  }

                  else{
                    this.passwordShown = true;
                    this.passwordType = 'text';
                  }
                }          

              }