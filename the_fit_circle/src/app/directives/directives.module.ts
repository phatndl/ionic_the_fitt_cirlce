import { NgModule } from '@angular/core';
import { AnimationDirective } from './animation/animation.directive';


@NgModule({
  declarations: [AnimationDirective],
  exports: [
      AnimationDirective
  ]
})
export class DirectivesPageModule {}
