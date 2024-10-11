export default function removeObservable(observable){
       
       if(observable !== null){
            return observable.unsubscribe();
       }

       return false;
}