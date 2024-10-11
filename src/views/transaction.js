import { ImageView, TextView, Composite } from "tabris";
import { primaryTextColor, viewBackground, primaryColor } from "../helpers/theme";

export default function transaction(imgName, textValue, dateValue, monneyValue){
      
       return new Composite({

            top: ["prev()", 15],
            left:0,
            right:0,
            padding:0,
            height:60
            
       }).append(

            new ImageView({
                centerY:0,
                left: 15,
                width: 36, 
                height: 36,
                image: { src: `resources/icons/${imgName}.png`, width: 36, height: 36 },
                class: "img-transaction"
            }),
            new TextView({
                 top: 7,
                 left: ["prev()", 10],
                 right:150,
                 maxLines: 1,
                 text: textValue,
                 textColor: primaryTextColor,
                 font:"bold 16px manrope"
            }),
            new TextView({
                 top: ["prev()", 0],
                 left: [".img-transaction", 10],
                 right:150,
                 maxLines:1,
                 text: dateValue,
                 textColor: "#757575",
                 font:"14px manrope"
            }),
            new TextView({
                  centerY:0,
                  right:15,
                  
                  maxLines: 1,
                  text: `-${monneyValue} xaf`,
                  textColor: "#e57373",
                  font: "bold 13px manrope"
            })
       )
}