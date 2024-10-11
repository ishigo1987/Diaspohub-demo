import { contentView, TextView, ImageView, Composite} from "tabris";
import largeButton from "../helpers-views/large-button";
import colorStatusbarNavigationbar from "../helpers-views/color-statusBar-navigationBar";
import setThemeTabris from "../helpers-views/set-theme-tabris";
import { viewBackground, primaryTextColor, primaryColor } from "../helpers/theme";
import { setHorizontal} from "../helpers/config";
import headerView from "../helpers-views/header-view";
import closeView from "../helpers-views/close-view";
import createInputElement from "../helpers-views/create-input-element";
import viewAnimationEntrance from "../helpers-views/animation-view-entrance";
import checkCodeEvent from "../events-views/check-code-event";
import sectionUnderHeader from "../helpers-views/section-under-header";
import snackbar from "../helpers-views/snackbar";

export function checkCode(){
        
    colorStatusbarNavigationbar("all", "transparent");
    setThemeTabris("all", "light");

    const area = new Composite({

        layoutData: "stretch",
        background: viewBackground, 
        transform: setHorizontal,
        id: 'check-code', 
        class: 'activeView'

    }).append(

        headerView(backButtonCallback, "Code", "back"),
        sectionUnderHeader("Vérification du numéro", "Entrez le code reçu par SMS."),
        createInputElement({inputPlaceholder: "Code de vérification", inputName: "code-verification", imgPath: "code-braces-custom", enterKeyTypeValue: "default", keyboardValue: "number", maxCharsValue: 5}),
        largeButton(["prev()", 30], "Vérifier", "check-code-button"),
        new TextView({
             top: ["prev()", 30],
             centerX: 0,
             text: "Renvoyer le code",
             textColor: primaryTextColor,
             font: "14px manrope"

        })
        
    ).onTap(()=>{
        
    }).appendTo(contentView);

    return viewAnimationEntrance(area).then(()=>{
           return checkCodeEvent();
    });

    function backButtonCallback(){ 
        
        return closeView(area);

    }

}