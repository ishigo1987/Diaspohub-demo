import{Button} from "tabris";
import{largeButtonColor, secondaryTextColor} from "../helpers/theme.js";

export default function largeButton(buttonTopPosition, buttonText, buttonId){
     
    return new Button({
         
        top:buttonTopPosition,
        left:15,
        right:15,
        height: 65,
        autoCapitalize:"none",
        font:"bold 14px manrope",
        style:"flat",
        text:buttonText,
        cornerRadius:10,
        background: largeButtonColor,
        textColor:secondaryTextColor,
        id:buttonId,
        data:{initialText: buttonText}
    })
}