import { createAnimation } from "@ionic/core";

export class Animation {
    parentAnimation: any;
    isPlaying: boolean = false;
    constructor(objEl: Array<object>) {
        const animations = [];
        objEl.forEach((obj: object) => {
            const animation = createAnimation().addElement(obj['el']);
            Object.keys(obj).map(key => {
                if(key === 'fromTo'){
                   
                    animation[key](obj[key][0], obj[key][1], obj[key][2]);
                }
                else if (key !== 'el'){
                    animation[key](obj[key]);
                }
             
            })    
            animations.push(animation);
        })
        this.parentAnimation = createAnimation().addAnimation(animations);
        this.isPlaying = false;
    }

    play() {
        if (this.isPlaying){
            this.parentAnimation.stop();
        }
        this.parentAnimation.play();
        this.isPlaying = true;
    }

}
