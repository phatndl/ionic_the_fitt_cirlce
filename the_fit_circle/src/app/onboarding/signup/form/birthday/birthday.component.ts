import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
})
export class BirthdayComponent implements OnInit {

  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {}

  
  back() {
    this.formService.previousStep();
  }
}
