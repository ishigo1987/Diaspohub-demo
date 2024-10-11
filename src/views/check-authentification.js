import {contentView, Composite, app, Row, CollectionView, ImageView, TextView } from "tabris";
import colorStatusbarNavigationbar from "../helpers-views/color-statusBar-navigationBar";
import setThemeTabris from "../helpers-views/set-theme-tabris";
import { viewBackground, primaryTextColor, primaryColor, bulletsColor, iconDark } from "../helpers/theme";
import { setHorizontal} from "../helpers/config";
import headerView from "../helpers-views/header-view";
import closeView from "../helpers-views/close-view";
import viewAnimationEntrance from "../helpers-views/animation-view-entrance";
import sectionUnderHeader from "../helpers-views/section-under-header";
import authenticationEvent from "../events-views/authentication-event";


export default function checkAuthentification(){

    const options = [{ option: 1, type: "number"},{option: 2, type: "number"},{option: 3, type: "number"},{option: 4, type: "number"},{option: 5, type: "number"},{option: 6, type: "number"},{option: 7, type: "number"},{option: 8, type: "number"},{option: 9, type: "number"},{option: "resources/icons/fingerprint-custom.png", type: "icon"}, {option: 0, type: "number"}, {option: "resources/icons/backspace-outline-custom.png", type: "icon"}];  
    colorStatusbarNavigationbar("all", "transparent");
    setThemeTabris("all", "light");

    const area = new Composite({

        layoutData: "stretch",
        background: viewBackground, 
        id: 'check-authentification', 
        class: 'activeView'

    }).append(

        headerView(closeApp, "Vérification authentification", "close"),
        sectionUnderHeader("Authentifiez-vous", "Vous pouvez le faire via le faceId, les empreintes digitales ou votre code secret"),
        new Row({
            centerX:0,
            top: screen.height > 850 ? ["prev()", 80] : ["prev()", 50],
            spacing:16,
            alignment:"centerY",
            id:"bullets-container"
        }).append(

            new Composite({
                 width:12,
                 height:12,
                 cornerRadius:50,
                 background: bulletsColor
            }),
            new Composite({
                width:12,
                height:12,
                cornerRadius:50,
                background: bulletsColor
           }),
           new Composite({
                width:12,
                height:12,
                cornerRadius:50,
                background: bulletsColor
            }),
            new Composite({
                width:12,
                height:12,
                cornerRadius:50,
                background: bulletsColor
           }),
           new Composite({
                width:12,
                height:12,
                cornerRadius:50,
                background: bulletsColor
            })
           
        ),
        new CollectionView({
        
            top: screen.height > 850 ? ["prev()", 80] : ["prev()", 50],
            left:15,
            right:15,
            bottom:200,
            columnCount:3,
            itemCount: options.length,
            cellHeight: 80,
            scrollbarVisible: false,
            cellType: (index) => options[index].type,
            id:"authentication-list",
            createCell:(type)=>{
                return new Composite({
                    
                    height:80,
                    width:80

                }).append(

                    new Composite({
                         
                         width:70,
                         height:70,
                         centerX:0,
                         cornerRadius:50,
                         highlightOnTouch:true,
                         centerY:0,
                         class: "cv-cell"
                    }).append(

                        type === "number" ? 
                    
                        new TextView({
                            
                            centerY:0,
                            centerX:0,
                            textColor: primaryTextColor,
                            font: "bold 24px manrope",
                            id: "code-number"
                        })
                        : 
                        new ImageView({
    
                            centerX:0,
                            centerY: 0, 
                            width: 32, 
                            height: 32, 
                            tintColor:iconDark,
                            id: "authentication-icon",

                        })
                    )
                )
            },

            updateCell:(cell, index)=>{

                  const widget = cell.children().last().children().last();
                  if(widget instanceof TextView){
                      return widget.text = options[index]?.option;
                  }
                  return widget.image = {src: options[index]?.option, width: 32, height: 32}
            }
        }),
        
        new TextView({
             top:["prev()", 30],
             left:15,
             right:15,
             alignment:"centerX",
             text:"Votre compte est actuellement en attente de déverrouillage.",
             textColor:primaryTextColor,
             font:"14px manrope",
             id:"account-state"
        }),
        new TextView({
            bottom: 60,
            left:15,
            right:15,
            alignment:"centerX",
            text:"Version 1.0.0(demo)",
            textColor:primaryTextColor,
            font:"12px manrope",
       })
    ).onTap(()=>{

    }).appendTo(contentView);

    return setTimeout(()=>{
        return authenticationEvent();
    },0);

    function closeApp(){
        return app.close();
    }
}