import { contentView, TextView} from "tabris";
import { primaryColor, primaryTextColor, secondaryTextColor, viewBackground } from "../helpers/theme";

export default function otherNavEvent(){ 

       const chips = contentView.find("#other-nav").children()
      
       chips.on("tap", ({target})=>{
                 
                chips.set({
                    background: "transparent",
                });
                chips.children(TextView).set({
                    textColor: primaryTextColor
                })
                target.set({
                     background: primaryColor,
                })
                target.find(TextView).set({
                     textColor: secondaryTextColor
                })
       });
}