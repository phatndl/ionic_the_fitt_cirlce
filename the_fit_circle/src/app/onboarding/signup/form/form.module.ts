import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';
import { GenderComponent } from './gender/gender.component';
import { BirthdayComponent } from './birthday/birthday.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule
  ],
  declarations: [FormPage, GenderComponent, BirthdayComponent],
  entryComponents: [GenderComponent, BirthdayComponent]
})
export class FormPageModule {}
