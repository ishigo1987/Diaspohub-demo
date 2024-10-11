import{contentView} from "tabris";
import signUp from "../modules/sign-up";
import snackbar from "../helpers-views/snackbar";
import { snackbarColorError } from "../helpers/theme";
import removeObservable from "../helpers/remove-observable";
import wrapperMessage from "../helpers/wrapper-message";

export default function signUpEvent(){

      let observable = null;
      contentView.find("#sign-up-button").only().onSelect(({target})=>{
            
             const phoneNumber = contentView.find("#phone-number").last().text;
             const fullName = contentView.find("#full-name").only().text;
             const email =  contentView.find("#email").only().text
             const secretCode = contentView.find("#password").only().text;
             const checkConditions = contentView.find("#check-conditions").only().checked;

             const data = {
                   phoneNumber: phoneNumber,
                   fullName: fullName,
                   email: email,
                   secretCode: secretCode,
                   checkConditions: checkConditions
             }

             observable = signUp(data).subscribe((response)=>{
                  
                    if(response?.Message === "all is ok"){
                         
                          return import("../views/check-code.js").then((view)=>{
                               
                                store = {...store, fullName: fullName, secretCode: secretCode, phoneNumber: phoneNumber};
                                return view.checkCode();
                          });
                    }
                            
                    return snackbar({
                    
                        widgetToAttach: target.parent("#sign-up"),
                        firstTextSnackbar: wrapperMessage(response?.Message),
                        imgPath: "cancel-outline",
                        snackbarColor: snackbarColorError
    
                    });
             });
      });

      contentView.find("#sign-up").only().onDispose ( ()=> removeObservable(observable));
             
}