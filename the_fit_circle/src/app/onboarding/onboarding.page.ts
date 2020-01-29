import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { IonSlides, Platform } from '@ionic/angular';
import { OnboardingService } from './onboarding.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  curIndex: number = 0;
  onboardingObj: object = [
    {
      bg: 'assets/images/onboarding_bg1.png',
      title: 'Custom Nutrition',
      content: 'Learn the unique macronutrients and calorie requirements your body needs based on your personal goals.'
    },
    {
      bg: 'assets/images/onboarding_bg2.png',
      title: 'Nutrition Tracker',
      content: 'Use our in-app meal and nutrition tracker to track your calories and macros and get closer to your wellness goals.'
    },
    {
      bg: 'assets/images/onboarding_bg3.png',
      title: 'Targeted Training',
      content: 'Workout anywhere, anytime! With access to both the gym and home version, you can enjoy new workouts each week that are specifically programmed to increase muscle mass and decrease body fat by pairing with your customized macros'
    },
    {
      bg: 'assets/images/onboarding_bg4.png',
      title: 'Fasting Intervals',
      content: 'Get started with Intermittent Fasting and stick with it! Set your fasting window, and get notified when you’re done! '
    },
    {
      bg: 'assets/images/onboarding_bg5.png',
      title: 'Social Accountability',
      content: 'Connect with FITT friends, cheer each other on, share your meals, or see how other members are keeping up with The FITT Cycle. Explore our community where you can feel free to share your sweaty selfies and FITT tips.'
    },
    {
      bg: 'assets/images/onboarding_bg6.png',
      title: 'Recipe Library',
      content: 'Choose from over 250+ recipes designed to meet your macronutrient needs. New featured recipes to make meal planning easy with the ability to log straight into your nutrition tracker.'
    }
  ]
  @ViewChild('slides', {static: true}) slides: IonSlides;
  swiperOpts: object = {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  }
  constructor(
    private plt: Platform,
    private onboardingService: OnboardingService
  ) { }

  ngOnInit() {
    this.plt.backButton.subscribe(() => {
      this.onboardingService.setSignIn(false);
      this.onboardingService.setSignUp(false);
    })
  }

  slideChanged() {
    this.curIndex = parseInt(document.querySelector(".swiper-slide-active").getAttribute("index"));
  }

  signIn() {
    this.onboardingService.setSignUp(false);
    this.onboardingService.setSignIn(true);
  }

  signup() {
    this.onboardingService.setSignIn(false);
    this.onboardingService.setSignUp(true);
  }
}
