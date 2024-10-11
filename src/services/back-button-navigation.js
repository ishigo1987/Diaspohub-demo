import {app,contentView} from "tabris";

import closeView from "../helpers-views/close-view.js";

export default function backButtonNavigation(){

    app.onBackNavigation((event)=>{

        event.preventDefault();

        const activeView = contentView.find('.activeView').last();
        
        if(["log-in", "check-authentification", "home"].includes(activeView.id) === true){

              return app.close();

        }

        if(["select-country", "sign-up", "check-code"].includes(activeView.id) === true){ 

            return closeView(activeView);
          
        }

       return true;
          
    });

}

