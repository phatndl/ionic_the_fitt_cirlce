import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-forget-pw',
  templateUrl: './forget-pw.component.html',
  styleUrls: ['./forget-pw.component.scss'],
})
export class ForgetPWComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }

}
