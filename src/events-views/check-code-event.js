import{contentView} from "tabris";
import snackbar from "../helpers-views/snackbar";
import { snackbarColorError } from "../helpers/theme";
import removeObservable from "../helpers/remove-observable";
import wrapperMessage from "../helpers/wrapper-message";
import checkCode from "../modules/check-code";
import checkAuthentification from "../views/check-authentification";

export default function checkCodeEvent(){

     let observable = null;
     contentView.find("#check-code-button").only().onSelect(({target})=>{
          
           const code = contentView.find("#code-verification").only().text;
           observable = checkCode(code).subscribe((response)=>{

                  if(response?.Message === "all is ok"){
                        
                        localStorage.setItem("user", JSON.stringify({
                              fullName: store.fullName,
                              secretCode: store.secretCode,
                              phoneNumber: store.phoneNumber
                        }));
                        checkAuthentification();
                        return setTimeout(()=>{
                              return target.parent("#check-code").dispose();
                        },500);
                  }
                  return snackbar({
                        
                        widgetToAttach: target.parent("#check-code"),
                        firstTextSnackbar: wrapperMessage(response?.Message),
                        imgPath: "cancel-outline",
                        snackbarColor: snackbarColorError

                  });
           });
     });

     contentView.find("#check-code").only().onDispose ( ()=> removeObservable(observable));
}