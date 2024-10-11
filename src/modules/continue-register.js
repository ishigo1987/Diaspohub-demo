import { Observable } from "tabris";
import { parsePhoneNumber } from "awesome-phonenumber";

export default function continueRegister(phoneNumber){

      return new Observable((subscriber)=>{

            let storePhoneNumber = localStorage.getItem("user");
            storePhoneNumber !== null ? storePhoneNumber = JSON.parse(storePhoneNumber).phoneNumber : null;

            if(parsePhoneNumber(phoneNumber)?.valid === false || phoneNumber !== storePhoneNumber){
                  
               return subscriber.next({ 
                    Message: "wrongNumber"
               });
                 
            }

            if(phoneNumber === storePhoneNumber){
                  return subscriber.next({
                        Message: "all is ok"
                  }); 
            }

      });
}