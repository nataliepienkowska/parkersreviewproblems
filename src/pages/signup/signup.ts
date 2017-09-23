import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUp {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad(){
    console.log('ionViewDidLoad SignUp')
  }

  public onButtonClicked(): void {
    this.viewCtrl.dismiss();
  }
  }
