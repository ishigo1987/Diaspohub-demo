
import {Composite, ImageView, TextView} from "tabris";
import { viewBackground, primaryTextColor, iconDark } from "../helpers/theme";


export default function countryButton(){
      
    return new Composite({
                    
        top: ["prev()", 20],
        left:15,
        right: 15,
        height: 50,
        elevation: 2,
        cornerRadius:10,
        background: viewBackground,
        highlightOnTouch:false,
        id: "select-country"
    }).append(
    
        new ImageView({
            
        left: 15, 
        centerY: 0, 
        width: 24, 
        height: 24,
        image: { src: "resources/icons/flag-48px.png", width: 24, height: 24 }, 
        id: "country-flag"
        
        }),
        
        new TextView({
            
            left: ["prev()", 15],
            centerY: 0,
            right: 40,
            maxLines: 1,
            text: "Selectionnez un pays",
            textColor: primaryTextColor,
            font: "13px manrope",
            id: "country-text"
        }),
        
        new ImageView({
            
        right: 15, 
        centerY: 0, 
        width: 32, 
        height: 32, 
        tintColor: iconDark,
        image: { src: "resources/icons/down.png", width: 28, height: 28}, 
        
        })
    )
}