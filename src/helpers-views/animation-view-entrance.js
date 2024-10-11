import animate from "./animation.js";

import {openHorizontal, setSecondTranslateHorizontal} from "../helpers/config.js";

export default function viewAnimationEntrance(viewToDisplay, timeToAppear = 250){

     return new Promise((resolve)=>{

          const viewUnderActiveView = viewToDisplay.siblings(".activeView");

          function animateActiveView(){

               return new Promise((resolve)=>{

                    return animate(viewToDisplay, { transform: openHorizontal}, null, timeToAppear).then((response)=>{

                          return resolve(response.Message);
                    });
               });
          }


          function animateViewUnderActiveView(){

               return new Promise((resolve)=>{

                    return animate(viewUnderActiveView[viewUnderActiveView.length - 1], { transform: setSecondTranslateHorizontal}, null, timeToAppear).then((response)=>{

                         return resolve (response.Message);
                    })
               })
          }
        

          return Promise.all([animateActiveView(), animateViewUnderActiveView()]).then(()=>{

               return resolve({Message: "Animation terminée"});
          });

     });
}