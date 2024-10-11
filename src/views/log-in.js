import { contentView, TextView, ImageView, Composite, app, ScrollView } from "tabris";
import largeButton from "../helpers-views/large-button";
import colorStatusbarNavigationbar from "../helpers-views/color-statusBar-navigationBar";
import setThemeTabris from "../helpers-views/set-theme-tabris";
import { viewBackground, primaryTextColor, primaryColor } from "../helpers/theme";
import headerView from "../helpers-views/header-view";
import closeView from "../helpers-views/close-view";
import createInputElement from "../helpers-views/create-input-element";
import outlineButton from "../helpers-views/outline-button";
import openSelectCountry from "../events-views/open-select-country";
import handleEventsRegister from "../events-views/handle-events-register";
import countryButton from "../helpers-views/country-button";
import sectionUnderHeader from "../helpers-views/section-under-header";

export default function logIn(){
     
    colorStatusbarNavigationbar("all", "transparent");
    setThemeTabris("all", "light");

    new Composite({

        layoutData: "stretch",
        background: viewBackground, 
        id: 'log-in', 
        class: 'activeView'

    }).append(

         headerView(closeApp, "Se connecter ou s'inscrire", "close"),

         new ScrollView({
             
             top: ["prev()", 0],
             left:0,
             right:0,
             bottom: 0,
             scrollbarVisible:false
         }).append(
                sectionUnderHeader("Bienvenue !", "Entrez le numéro de téléphone associé à votre compte Diaspobuy"),
                countryButton(),
                createInputElement({inputPlaceholder: "Numéro de téléphone", inputName: "phone-number", imgPath: "phone-modern-48px", enterKeyTypeValue: "default", keyboardValue: "number"}),
                largeButton(["prev()", 30], "Continuer", "login-button"),

                new Composite({

                    top: ["prev()", 25],
                    left:15,
                    right:15,
                    height:2,
                    background: "#eeeeee"
                }),

                new Composite({

                    top: ["prev()", 0],
                    width:50,
                    background: viewBackground,
                    centerX:0,
                    transform: {translationY: -12}
            }).append(
        
                    new TextView({
                        
                        top: 0,
                        alignment: "centerX",
                        text: "Ou",
                        centerX: 0,
                        textColor: primaryTextColor
                    }),

            ),
                outlineButton(["prev()",5], "Continuer avec l'email", "email-24px", "email-button"),
                outlineButton(["prev()",0], "Continuer avec Google", "google-192px", "google-button"),
                outlineButton(["prev()",0], "Continuer avec Apple", "apple", "apple-button"),

                new TextView({

                    top: ["prev()", 20],
                    left:15,
                    right:15,
                    markupEnabled: true,
                    textColor: primaryTextColor,
                    font: "12px manrope",
                    alignment:"centerX",
                    text: `En vous connectant, vous acceptez nos <a href='#' textColor=${primaryColor}><strong>Termes et Conditions </strong></a> ainsi que notre <a href="#" textColor=${primaryColor}> <strong>Politique de Confidentialité</strong> </a>`,
                }),
                
                new Composite({
                    
                    centerX:0,
                    top: ["prev()", 20]
                }).append(
                    new TextView({
                        text: "Pas encore de compte ?",
                        font: "13px manrope"
                    }),
        
                    new TextView({
                        left: ["prev()", 3],
                        text: "Inscrivez vous",
                        textColor: primaryColor,
                        font: "bold 13px manrope",
                        id: "inscription-link"
                    })
                )
         )

    ).appendTo(contentView);

    function closeApp(){
        return app.close();
    }

    // Call events on page
    openSelectCountry();
    handleEventsRegister();
}