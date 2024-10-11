import { Tab, ImageView, TextView } from "tabris";
import { viewBackground, secondaryViewColor, primaryTextColor } from "../helpers/theme";

export default function statsTab(){
      
      return new Tab({
        layoutData: "stretch",
        background: secondaryViewColor,
        id: 'stats-tab', 
        image: {src: "resources/icons/pie-chart-64px.png"},
        title: "Statistiques"
        
      }).append(

          new TextView({
               centerY:0,
               centerX:0,
               textColor: primaryTextColor,
               text: " Vue des Statisques (demo)",
               font:"bold 15px manrope"
          })
      )
}