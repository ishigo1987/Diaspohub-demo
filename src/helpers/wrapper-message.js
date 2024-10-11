export default function wrapperMessage(message){
       
      if(message === "wrongNumber"){
           return "Votre numéro de téléphone n'est pas correct.";
      }
      if(message === "wrongSecretCode"){
           return "Le code secret n'est pas correct.";
      }
      if(message === "conditionsUnchecked"){
           return "Veuillez accepter nos conditions générales et notre politique de confidentialité.";
      }
      if(message === "wrongCode"){
           return "Veuillez entrer le code que vous avez reçu par SMS.";
      }
      if(message === "wrongName"){
           return "Entrez votre nom complet."
      }
      if(message === "wrongEmail"){
           return "Votre adresse mail entrée n'est pas correcte.";
      }
      if(message === "noAuthMechanism"){
           return "Vous n'avez pas de mécanisme d'authentification existant, utilisez votre code secret. ";
      }

      return false;
}