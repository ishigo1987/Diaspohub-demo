import snackbar from "../helpers-views/snackbar";
import { contentView } from "tabris";
import { snackbarColorError } from "../helpers/theme";
import continueRegister from "../modules/continue-register";
import wrapperMessage from "../helpers/wrapper-message";
import checkAuthentification from "../views/check-authentification";
import removeObservable from "../helpers/remove-observable";

export default function handleEventsRegister(){
      
      let observable = null;
      contentView.find("#login-button").only().onSelect(({target})=>{

          const phoneNumber = contentView.find("#phone-number").only().text;

          observable = continueRegister(phoneNumber).subscribe((response)=>{ 

                    if(response?.Message === "all is ok"){
                           
                           checkAuthentification();
                           return setTimeout(()=>{ 
                              return target.parent("#log-in").dispose();
                           },1000);
                    }

                    return snackbar({
                  
                        widgetToAttach: target.parent("#log-in"),
                        firstTextSnackbar: wrapperMessage(response?.Message),
                        imgPath: "cancel-outline",
                        snackbarColor: snackbarColorError
     
                   });
          });
            
      });


      contentView.find("#inscription-link").only().onTap(()=>{

            return import("../views/sign-up.js").then((view)=>{
                            
                  return view.signUp();
            });
      });

      contentView.find("#log-in").only().onDispose ( ()=> removeObservable(observable));


}