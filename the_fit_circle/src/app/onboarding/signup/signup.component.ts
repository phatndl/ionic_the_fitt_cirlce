import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { GenderComponent } from './form/gender/gender.component';
import { FormPage } from './form/form.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  signUpForm(form: NgForm){
    console.log("signUpForm", form);
    // if (!form.valid){
    //   return;
    // }
    // const { email, pwd } = form.value;
    // console.log("email password: ", email, pwd);
    this.modalCtrl.create({
      component: FormPage
    }).then(modalEl => modalEl.present());
  }

}
