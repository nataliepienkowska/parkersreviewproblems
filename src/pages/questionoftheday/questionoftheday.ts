import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-questionoftheday',
  templateUrl: 'questionoftheday.html'
})
export class QuestionoftheDay {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad(){
    console.log('ionViewDidLoad QuestionoftheDay')
  }
  
  public onButtonClicked(): void {
    this.viewCtrl.dismiss();
  }
}
