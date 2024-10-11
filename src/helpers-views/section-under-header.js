import{Composite, TextView} from "tabris";
import { primaryTextColor } from "../helpers/theme";

export default function sectionUnderHeader(title, subtitle){

    return new Composite({

        top: ["prev()", 0],
        left:15,
        right:15,
    }).append(

        new TextView({
                    
            top: 0,
            left:0,
            right:0,
            text: title,
            textColor: primaryTextColor,
            font: "25px bold manrope",
            alignment: "left"
        }),
    
        new TextView({
            
            top: ["prev()", 0],
            left:0,
            right:0,
            text: subtitle,
            textColor: primaryTextColor,
            font: "12px manrope",
            alignment: "left"
        })
    )
}