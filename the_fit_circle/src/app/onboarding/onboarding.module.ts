import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingPageRoutingModule } from './onboarding-routing.module';

import { OnboardingPage } from './onboarding.page';
import { SigninComponent } from './signin/signin.component';
import { DirectivesPageModule } from '../directives/directives.module';
import { SignupComponent } from './signup/signup.component';
import { ForgetPWComponent } from '../modal/forget-pw/forget-pw.component';
import { SignupModule } from './signup/signup.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingPageRoutingModule,
    DirectivesPageModule,
    SignupModule
  ],
  declarations: [OnboardingPage, SigninComponent, SignupComponent, ForgetPWComponent],
  entryComponents: [ForgetPWComponent]
})
export class OnboardingPageModule {}
