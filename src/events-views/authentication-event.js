import { contentView, TextView } from "tabris";
import authentication from "../modules/authentication";
import wrapperMessage from "../helpers/wrapper-message";
import snackbar from "../helpers-views/snackbar";
import { bulletsColor, primaryColor, primaryTextColor, snackbarColorError } from "../helpers/theme";
import { secretCodeMaxLength, numberOfCodeAttempts, blockingTime } from "../helpers/config";
import blockingDuration from "../modules/blocking-duration";
import animate from "../helpers-views/animation";
import home from "../views/home";

export default function authenticationEvent(){

   let isAccountLock = false;
   let maxSecretCodeAttempt = 0;
   let digitNumber = 0; // Nombre de caractères que l'utilisateur peut entrer, il ne doit pas dépasser la valeur de secretCodeMaxLength
   let codeEntered;
   let observable;
   const secretCode = JSON.parse(localStorage.getItem("user")).secretCode;
   const bullets = contentView.find("#bullets-container").only().children();
   contentView.find(".cv-cell").on("tap", async ({target})=>{ 
                
        const widget = target.children().last();
        if(widget instanceof TextView){

            if(isAccountLock === false){

                const accountState = contentView.find("#account-state").only();

                if(digitNumber < secretCodeMaxLength){

                    codeEntered === undefined ? codeEntered = widget.text : codeEntered = `${codeEntered}${widget.text}`;
                    digitNumber++;
                    illuminateBullets();
                }

                if(digitNumber === 5){
                    
                    if(Number(secretCode) === Number(codeEntered)){ 

                            // Tout est ok on peut passer a la vue suivante.
                            return authentificationSuccess();
                    }

                    // L'utilisateur a échoué lorsqu'il a entré son code
                    navigator.vibrate(100);
                    await animate(target.parent("#authentication-list"), {transform: {translationX: -50}}, {repeatValue: 4, reverseValue: true, easingValue: "linear"}, 20);
                    target.parent("#authentication-list").transform = {translationX:0};
                    resetDigit();
                    resetBullets();
                    maxSecretCodeAttempt++;

                    // L'utilisateur a atteint la limite de codes erronés 

                    if(maxSecretCodeAttempt === numberOfCodeAttempts){
                        
                        isAccountLock = true;
                        resetDigit();
                        return observable = blockingDuration(blockingTime).subscribe((data)=>{
                              
                                if(data.Message === "CountOver"){
                                      
                                      // On enléve le blocage
                                      maxSecretCodeAttempt = 0;
                                      isAccountLock = false;
                                      resetDigit();
                                      accountState.set({
                                      
                                            text: `Votre compte est actuellement en attente de déverrouillage.`,
                                            textColor: primaryTextColor
                                      });
                                      return observable.unsubscribe();
                                }
                                return accountState.set({
                                      
                                     text: `Vous avez dépassé le nombre d'essais autorisés, réessayez dans ${data.Message}`,
                                     textColor: snackbarColorError
                                });
                                
                        });
                    }

                }
            }

        return false;
            
        }

        const imgSrc = widget.image.src;
        if(imgSrc.includes("fingerprint") === true){
            return authentication().then((result)=>{
                
                if(result.status === "success"){
                       
                        // We unlock the device
                        return authentificationSuccess();
                }

                if(result.status === "noAuthMechanism"){
                        return snackbar({
                        
                            widgetToAttach: target.parent("#check-authentification"),
                            firstTextSnackbar: wrapperMessage(result?.status),
                            imgPath: "cancel-outline",
                            snackbarColor: snackbarColorError

                        });
                }

            });
        }

        // Delete button

        if(imgSrc.includes("backspace") === true){
              
              if(digitNumber === 0){
                  
                   return false;
              }

              digitNumber--;
              return resetOneBullet();
        }

        function authentificationSuccess(){
            // Tout est ok on peut passer a la vue suivante.
            home();
            return setTimeout(()=>{
                 return target.parent("#check-authentification").dispose();
            },1200);
        }
        
   });

   function resetDigit(){
        
        codeEntered = undefined;
        return digitNumber = 0;
   }

   function illuminateBullets(){
        //digitNumber is like an index
        return bullets[digitNumber - 1].background = primaryColor;
   }

   function resetBullets(){
       return bullets.set({
            background: bulletsColor
       })
   }

   function resetOneBullet(){
        return bullets[digitNumber].background = bulletsColor;
   }

}