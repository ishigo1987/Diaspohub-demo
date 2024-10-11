import { authentication } from "tabris";

export default function authentication(){

      return new Promise((resolve)=>{ 
            
          if(authentication.canAuthenticate({allowCredentials: true}) === true){
              
              return authentication.authenticate({
      
                  
                      title: "Authentification biométrique", // The title shown in the authentication ui. optional
                      subtitle: "Sélectionnez votre moyen d'authentification pour déverrouiller Diaspobuy et accéder à votre compte.", // The subtitle shown in the authentication ui. optional
                      message: "", // The message shown in the authentication ui. optional
                      allowCredentials: true, // Configure whether to allow another authentication mechanism other than biometric authentication. For example, when a fingerprint would be the device default, the user could choose to fallback to use a pin instead. When non-biometric credentials are used, no fallback is available. . defaults to true
                      confirmationRequired: true // When a fast authentication mechanism like face unlock is used, this option allows to configure whether a successful authorization has to be confirmed by the user via a button press. defaults to true
                    
              }).then((result) => resolve(result));
             
          }

          return resolve({status: "noAuthMechanism"});
      })
}