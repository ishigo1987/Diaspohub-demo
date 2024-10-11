import { statusBar, navigationBar } from "tabris";

export default function modeStatusBarNavigationBar(statusOrNavigation, mode){

    if(statusOrNavigation === "statusbar"){

        return statusBar.displayMode = mode;
    }

    if(statusOrNavigation === "navigationbar"){

            return navigationBar.displayMode = mode;
    }

    if(statusOrNavigation === "all"){

            statusBar.displayMode = mode   

            navigationBar.displayMode = mode
    }

    return true;

    
}

