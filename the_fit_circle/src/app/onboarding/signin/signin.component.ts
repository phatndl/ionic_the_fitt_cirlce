import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../onboarding.service';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ForgetPWComponent } from 'src/app/modal/forget-pw/forget-pw.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private onboardingSvc: OnboardingService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit(
  
  ) {}

  signInForm(form: NgForm) {
    console.log("signInForm", form);
    if (!form.valid){
      return;
    }
    const { email, pwd } = form.value;
    console.log("email password: ", email, pwd);
  }

  forgetPassword() {
    this.modalCtrl.create({
      component: ForgetPWComponent
    }).then(ml => ml.present());
  }
}
