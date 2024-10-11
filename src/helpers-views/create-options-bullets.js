import { Composite, TextView, ImageView } from "tabris";
import { primaryColor, primaryTextColor, primaryBackgroundIcon } from "../helpers/theme";

export default function createOptionsBullets(imgName, text){
       
       return  new Composite({
                padding: 10
        }).append(
                new ImageView({
                    centerY:0,
                    centerX:0,
                    width: 55, 
                    height: 55, 
                    cornerRadius: 27.5, 
                    tintColor: primaryColor,
                    background: primaryBackgroundIcon, 
                    highlightOnTouch: true,
                    image: { src: `resources/icons/${imgName}.png`, width: 28, height: 28 },
                    class: "icon-bullet"
                }),
                new TextView({
                    top:["prev()", 5],
                    left:0,
                    right:0,
                    alignment:"centerX",
                    text: text,
                    textColor:primaryTextColor,
                    font:"bold 12px manrope"
                })
        )
}