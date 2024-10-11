import {Composite, TextInput, ImageView} from "tabris";
import {primaryColor, primaryTextColor, iconDark, viewBackground} from "../helpers/theme.js";

export default function createInputElement(data){

    const{inputPlaceholder, inputName, imgPath, keyboardValue = "email", enterKeyTypeValue, maxCharsValue = null} = data;

    const composite = new Composite({ 
            
        top: ["prev()", 10], 
        left: 15, 
        right: 15, 
        height: 50, 
        cornerRadius: 10, 
        elevation: 2,
        background: viewBackground

    }).append(

        new ImageView({
            left:15, 
            centerY: 0, 
            width: 24, 
            height: 24, 
            image: { src: `resources/icons/${imgPath}.png`, width: 24, height: 24 }, 
            tintColor: iconDark 
        }),

        new TextInput({ 
            
            centerY: 0, 
            left: ["prev()", 5], 
            right: 32, 
            style: 'none', 
            maxChars:500, 
            type: inputName === "password" ? "password" : "default",
            floatMessage: false, 
            textColor: primaryTextColor, 
            cursorColor: primaryColor, 
            keyboard: keyboardValue,
            keyboardAppearanceMode: "ontouch",
            enterKeyType: enterKeyTypeValue,
            background: 'transparent',
            message: `${inputPlaceholder}`, 
            messageColor: primaryTextColor, 
            maxChars:maxCharsValue,
            font: "13px manrope",
            id: inputName,
            class: "input"
        
        })

    )

    const textInput = composite.find(TextInput).only();

    if(textInput.type === "password"){

        composite.append(

            new ImageView({

                right: 15, 
                centerY: 0, 
                width: 24, 
                height: 24, 
                image: { src: "resources/icons/hide-password.png", width: 24, height: 24 }, 
                tintColor: iconDark 

            }).onTap(({target})=>{

                if(textInput.revealPassword === false){

                    target.image = {src:"resources/icons/show-password.png", width: 24, height: 24};

                    return textInput.revealPassword = true;
                }

                target.image = {src:"resources/icons/hide-password.png", width: 24, height: 24};

                return textInput.revealPassword = false;

            })
        )
    }

    return composite;


};