import {Observable} from "tabris";
import { parsePhoneNumber } from "awesome-phonenumber";
import { secretCodeMaxLength } from "../helpers/config";

export default function signUp(data){ 
   
      return new Observable((subscriber)=>{
           
            const{phoneNumber, email, secretCode, checkConditions, fullName} =  data;

            const mailFormatRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if(fullName === ""){
                  
                return subscriber.next({
                    Message: "wrongName"
                });
            }

            if(mailFormatRegex.test(email) === false){

                return subscriber.next({
                     Message: "wrongEmail"
                });

            }

            if(parsePhoneNumber(phoneNumber)?.valid === false){
                    
                return subscriber.next({
                    Message: "wrongNumber"
                });
                
            }

            if(secretCode === "" || secretCode.length < secretCodeMaxLength){
                  
                return subscriber.next({
                     Message: "wrongSecretCode"
                });
            }
            if(checkConditions === false){
                 
                return subscriber.next({
                     Message: "conditionsUnchecked"
                });
            }

            localStorage.setItem("secretCode", secretCode);
            return subscriber.next({
                Message: "all is ok"
            });
            
      });
}