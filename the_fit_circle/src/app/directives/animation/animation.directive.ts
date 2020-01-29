import { Directive, ElementRef, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Animation } from '../../../utils/animation';
import { Subscription, Subject, Observable } from 'rxjs';

@Directive({
  selector: '[animation]'
})
export class AnimationDirective implements OnInit, OnChanges, OnDestroy {
  @Input('y') y: Array<string>;
  @Input('x') x: Array<string>;
  @Input('when') when: boolean;
  private animation: object = {
    next: '',
    back : ''
  };
  private subcription: Subscription
  constructor(
    private el: ElementRef,
  ) { 
  }

  ngOnInit() {
    const combineAnimationNext = [];
    const combineAnimationBack = [];
    combineAnimationNext.push({
      el: this.el.nativeElement,
      easing: "ease",
      duration: 300,
      fromTo: ['transform', 'translateY(' + this.y[0] +')', 'translateY(' + this.y[1] +')']
    });  
    combineAnimationBack.push({
      el: this.el.nativeElement,
      easing: "ease",
      duration: 300,
      fromTo: ['transform', 'translateY(' + this.y[1] +')', 'translateY(' + this.y[0] +')']
    });  
    this.animation['next'] = new Animation(combineAnimationNext);
    this.animation['back'] = new Animation(combineAnimationBack);
  }

  ngOnDestroy() {

  }

  ngOnChanges(changes) {
    if (!changes.when.previousValue && changes.when.currentValue){
      console.log("ngOnChanges", changes);
      return this.animation['next'].play();
    }
    else if (changes.when.previousValue && !changes.when.currentValue) {
      return this.animation['back'].play();
    }
    else{
      console.log("érrrrr")
    }
  }
}
