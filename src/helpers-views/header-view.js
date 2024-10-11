import {TextView, ImageView, Composite} from "tabris";

import {primaryTextColor, iconBackground, secondaryTextColor} from "../helpers/theme.js";

export default function headerView(callback, firstText, imgPath, secondText){

    const header = new Composite({

        top: 40, 
        left: 6, 
        right: 0, 
        height: 57, 
        background: "transparent", 
        elevation: 3

    }).append(

        new ImageView({ 
            
            centerY: 0, 
            left: 5, 
            width: 38, 
            height: 36, 
            cornerRadius: 18, 
            background: iconBackground, 
            highlightOnTouch: true, 
            tintColor: primaryTextColor, 
            image: { src: `resources/icons/${imgPath}.png`, width: 24, height: 24 },
            id: "backImage"

        }).onTap(()=>{

            callback();

        }),

        new TextView({
            centerY: 0,
            left: ["prev()", 5], 
            right: 15,
            maxLines: 1,
            text: firstText, 
            textColor: primaryTextColor,
            font: "bold 15px manrope",
            id: "firstText"

        })
        
    );  
    
    if(secondText !== undefined){

         header.find("#firstText").only().set({

              top:10,
              centerY: "auto"
         });

         header.append(

            new TextView({
    
                top: ["prev()", 0], 
                left: ["#backImage", 0], 
                right: 120,
                maxLines: 1,
                text: secondText, 
                textColor: secondaryTextColor,
                font: "12px manrope",
            })
    
         )
         
    }

    return header;

}