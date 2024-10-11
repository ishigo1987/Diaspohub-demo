import { Observable } from "tabris";
import { secretCodeMaxLength } from "../helpers/config"; 

export default function checkCode(code){
      
      return new Observable((subscriber)=>{

            if(code === "" || code.length !== secretCodeMaxLength){
                   
                return subscriber.next({
                    Message: "wrongCode"
                });
            }

            return subscriber.next({
                Message: "all is ok"
            });

      });
}