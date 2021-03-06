import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { QuestionoftheDay} from '../questionoftheday/questionoftheday';
import { SignUp } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

public onButtonClicked(): void {
  let modal = this.modalCtrl.create(QuestionoftheDay)
  modal.present();
  }


}
