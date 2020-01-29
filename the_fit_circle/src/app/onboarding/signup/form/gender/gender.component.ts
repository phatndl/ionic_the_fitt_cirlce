import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../../../onboarding.service';
import { FormService } from '../form.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss'],
})
export class GenderComponent implements OnInit {
  private curGender: HTMLElement;
  private gender: string;
  constructor(
    private onboardingService: OnboardingService,
    private formService: FormService
  ) { }

  ngOnInit() {}

  setGender(gender: HTMLElement, data: string) {
    if (this.curGender){
      this.curGender.removeAttribute('active');
    }
    gender.setAttribute("active", "");
    this.curGender = gender;
    this.gender = data;
  }

  saveGender() {
    this.formService.setGender(this.gender);
    this.formService.nextStep();
  }

  back() {
    this.formService.previousStep();
  }

}
