import {contentView, Composite, app, TabFolder } from "tabris";
import colorStatusbarNavigationbar from "../helpers-views/color-statusBar-navigationBar";
import setThemeTabris from "../helpers-views/set-theme-tabris";
import { viewBackground, primaryTextColor, primaryColor, iconDark, secondaryViewColor } from "../helpers/theme";
import { setHorizontal} from "../helpers/config";
import headerView from "../helpers-views/header-view";
import closeView from "../helpers-views/close-view";
import viewAnimationEntrance from "../helpers-views/animation-view-entrance";
import homeTab from "./home-tab";
import bankTab from "./bank-tab";
import statsTab from "./stats-tab";
import otherNavEvent from "../events-views/other-nav-event";

export default function home(){
      
    colorStatusbarNavigationbar("all", secondaryViewColor);
    setThemeTabris("all", "light");

    const area = new Composite({

        layoutData: "stretch",
        background: viewBackground, 
        transform: setHorizontal,
        id: 'home', 
        class: 'activeView'

    }).append(

         new TabFolder({
             layoutData:"stretch",
             selectedTabTintColor: primaryColor,
             tabBarBackground:secondaryViewColor,
             tabBarLocation: "bottom",
             paging:false,
             tabTintColor: primaryTextColor,
         }).append(
             
             homeTab(),
             statsTab(),
             bankTab(),
         )
    ).onTap(()=>{
        
    }).appendTo(contentView);

    return viewAnimationEntrance(area).then(()=>{
          otherNavEvent();
    })

    function closeApp(){
        return app.close();
    }


}