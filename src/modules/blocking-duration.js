import { Observable } from "tabris";

export default function blockingDuration(blockingDuration){
       
       return new Observable((subscriber)=>{

             let count = setInterval(()=>{

                    // Convertir le timestamp de millisecondes en secondes
                    const totalSeconds = Math.floor(blockingDuration / 1000);

                    // Calculer les minutes et les secondes restantes
                    const minutes = Math.floor(totalSeconds / 60);
                    const seconds = totalSeconds % 60;

                    // Retourner le résultat formaté
                    subscriber.next({
                          
                         Message: `${minutes}m ${seconds}s`
                    });

                    blockingDuration = blockingDuration - 1000;

                    if(Number(blockingDuration) === 0){

                           clearInterval(count);
                           return subscriber.next({
                                Message: "CountOver"
                           });
                    }
                    
             },1000);
       })
}