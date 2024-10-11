import {Composite,TextView, ImageView} from "tabris";
import {secondaryTextColor, iconLight, primaryColor} from "../helpers/theme.js";
import animate from "./animation.js";
   
   /** 
   * This widget handle the message return by the module
   * @param {widgetToAttach} string
   * @param {firstTextSnackbar} string
   * @param {delayOfHidingSnackbar} string
   * @param {secondTextSnackbar} string
   * @return {promise} primitive type
*/

export default function snackbar(snackbarOptions){

    // Single line height = 48dp = 36px but i choose 40px
    //Multi lines height = 80dp = 60px

    const{widgetToAttach, firstTextSnackbar, delayOfHidingSnackbar = 3000, secondTextSnackbar, imgPath, snackbarColor} = snackbarOptions;
    return new Promise((resolve)=>{

        const snackbar = new Composite({ 
          
          bottom: 60,
          padding:15,
          left: 15, 
          right: 15,
          elevation:4, 
          cornerRadius:10, 
          padding: 10, 
          background: snackbarColor, 
          transform:{translationY:250}

        }).append(
          new ImageView({

            left: 0, 
            centerY: 0, 
            width: 24, 
            height: 24, 
            image: { src: `resources/icons/${imgPath}.png`, width: 22, height: 22}, 
            tintColor: iconLight 

          }),
          new TextView({ 
          
            left: ["prev()", 10], 
            right: 15,
            font: "13px manrope", 
            centerY: 0, 
            text: firstTextSnackbar, 
            textColor: secondaryTextColor
          })
        ).appendTo(widgetToAttach);
        
       
        
        if(secondTextSnackbar !== undefined){

          firstMessage.right = 120;

          new TextView({ 
            
            right: 0, 
            highlightOnTouch: true, 
            centerY: 0, 
            text: secondTextSnackbar.toUpperCase(), 
            textColor: primaryColor ,
            font:"bold 15px manrope"
          
          }).onTap(() =>{

              closeSnackbar();

              resolve("Action Snackbar Clicked");

          }).appendTo(snackbar);

        }
  
        function closeSnackbar(){

            return animate(snackbar, { transform: { translationY: 250 } }, null, 250).then((result)=>{ 

                return snackbar.dispose();

            });  
        }

        return animate(snackbar, { transform: { translationY: 0 } }, null, 300).then((result)=>{

            if(delayOfHidingSnackbar !== "infinite"){

                // i replace delay by setTimeout for some design purposes
                return setTimeout(()=>{closeSnackbar();},delayOfHidingSnackbar);
              
            }

        });
    });

}