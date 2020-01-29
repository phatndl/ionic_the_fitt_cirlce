import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _step: number = 1;
  private _user: object = {
    gender: ''
  };
  constructor(
    private modalCtrl: ModalController
  ) { }

  nextStep() {
    this._step++;
  }

  previousStep() {
    this._step--;
    if (this._step <= 0) {
      this.modalCtrl.dismiss();
      this._step = 1; // reset value
    }
  }

  setGender(gender: string) {
    this._user['gender'] = gender;
  }

  get step() {
    return this._step;
  }
}
