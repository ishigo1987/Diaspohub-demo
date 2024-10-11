import{Composite, ImageView, TextView} from "tabris";
import { primaryTextColor } from "../helpers/theme";

export default function createPictureBullet(imgName, textValue){
        
    return  new Composite({
        padding: 10,
        left: ["prev()", 0]
    }).append(
            new ImageView({
            centerY:0,
            centerX:0,
            width: 55, 
            height: 55, 
            cornerRadius: 100,
            scaleMode: "fill",
            highlightOnTouch: true,
            image: { src: `resources/images/${imgName}`, width: 55, height: 55 },
            class: "icon-bullet"
            }),
            new TextView({
                top:["prev()", 5],
                left:0,
                right:0,
                alignment:"centerX",
                text: textValue,
                textColor:primaryTextColor,
                font:"bold 12px manrope"
            })
    )
}