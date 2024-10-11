import { Tab, ImageView, TextView } from "tabris";
import { viewBackground, primaryTextColor, secondaryViewColor } from "../helpers/theme";

export default function bankTab(){
      
      return new Tab({
        layoutData: "stretch",
        background: secondaryViewColor, 
        id: 'bank-tab', 
        image: {src: "resources/icons/bank-piggy-64px.png"},
        title: "Banque"
        
      }).append(

        new TextView({
          centerY:0,
          centerX:0,
          textColor: primaryTextColor,
          text: "Vue listes banques (demo)",
          font:"bold 15px manrope"
        })
      )
}