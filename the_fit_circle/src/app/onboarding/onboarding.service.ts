import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {
  private _signIn: boolean = false;
  private _signUp: boolean = false;
  private _userSignUp: object = {
    gender: "male"
  }
  constructor(
  ) { }

  get isSignIn(){
    return this._signIn;
  }

  get isSignUp(){
    return this._signUp;
  }

  setSignIn(state: boolean) {
    this._signIn = state;
  }

  setSignUp(state: boolean) {
    this._signUp = state;
  }

  setGender(gender: string) {
    this._userSignUp['gender'] = gender;
  }
}
