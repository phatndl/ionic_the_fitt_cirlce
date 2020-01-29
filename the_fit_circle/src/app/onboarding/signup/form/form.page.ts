import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {
  }

}
