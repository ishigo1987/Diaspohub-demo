import{Button} from "tabris";
import{primaryTextColor, primaryTextColor} from "../helpers/theme.js";

export default function outlineButton(buttonTopPosition, buttonText, imgPath, buttonId){
     
    return new Button({
         
        top:buttonTopPosition,
        left:15,
        right:15,
        height: 65,
        autoCapitalize:"none",
        font:"bold 14px manrope",
        style:"outline",
        text:buttonText,
        image: {src: `resources/icons/${imgPath}.png`, width:24, height: 24},
        strokeColor: "#eeeeee",
        cornerRadius:10,
        textColor:primaryTextColor,
        id:buttonId,
        class: "outline-button"
    })
}