import { contentView, TextView, ImageView, Composite, ScrollView, CheckBox } from "tabris";
import largeButton from "../helpers-views/large-button";
import colorStatusbarNavigationbar from "../helpers-views/color-statusBar-navigationBar";
import setThemeTabris from "../helpers-views/set-theme-tabris";
import { viewBackground, primaryTextColor, primaryColor } from "../helpers/theme";
import { setHorizontal, secretCodeMaxLength } from "../helpers/config";
import headerView from "../helpers-views/header-view";
import closeView from "../helpers-views/close-view";
import createInputElement from "../helpers-views/create-input-element";
import openSelectCountry from "../events-views/open-select-country";
import viewAnimationEntrance from "../helpers-views/animation-view-entrance";
import countryButton from "../helpers-views/country-button";
import signUpEvent from "../events-views/sign-up-event";
import sectionUnderHeader from "../helpers-views/section-under-header";

export function signUp(){

    colorStatusbarNavigationbar("all", "transparent");
    setThemeTabris("all", "light");

    const area = new Composite({

        layoutData: "stretch",
        background: viewBackground, 
        transform: setHorizontal,
        id: 'sign-up', 
        class: 'activeView'

    }).append(

         headerView(backButtonCallback, "S'inscrire", "back"),

         new ScrollView({
             
             top: ["prev()", 0],
             left:0,
             right:0,
             bottom: 0
         }).append(
            sectionUnderHeader("Créer un compte", "Entrez le numéro de téléphone ou l'adresse mail pour votre compte Diaspobuy"),
            countryButton(),
            createInputElement({inputPlaceholder: "Nom complet", inputName: "full-name", imgPath: "account-48px", enterKeyTypeValue: "default", keyboardValue: "default"}),
            createInputElement({inputPlaceholder: "Adresse mail", inputName: "email", imgPath: "email-plus-custom-48px", enterKeyTypeValue: "default", keyboardValue: "email"}),
            createInputElement({inputPlaceholder: "Numéro de téléphone", inputName: "phone-number", imgPath: "phone-modern-48px", enterKeyTypeValue: "default", keyboardValue: "number"}),
            new TextView({
                    
                top: ["prev()", 10],
                left: 15,
                alignment: "left",
                right: 15,
                text: "Nous vous enverrons un code de vérification par SMS à ce numéro pour confirmer qu'il s'agit bien de vous.",
                textColor: primaryTextColor,
                font: "12px manrope"
            }),

            createInputElement({inputPlaceholder: `Code secret à ${secretCodeMaxLength} chiffres`, inputName: "password", maxCharsValue: 5, imgPath: "lock-custom-48px", enterKeyTypeValue: "default", keyboardValue: "number"}),
            new CheckBox({

                  top:["prev()", 20],
                  left:15,
                  right:15,
                  checkedTintColor:primaryColor,
                  font: "12px manrope",
                  text: "En créant votre compte, vous acceptez nos conditions générales d'utilisation et notre politique de confidentialité",
                  textColor: primaryTextColor,
                  id:"check-conditions"
            }),

            largeButton(["prev()", 30], "Inscription", "sign-up-button")
         )
    ).onTap(()=>{
        
    }).appendTo(contentView);

    return viewAnimationEntrance(area).then(()=>{
          openSelectCountry();
          return signUpEvent();
    });

    function backButtonCallback(){ 
        
        return closeView(area);

    }
}