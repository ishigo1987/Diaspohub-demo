import { contentView, TextView, ImageView, Composite, CollectionView } from "tabris";
import viewAnimationEntrance from "../helpers-views/animation-view-entrance";
import { primaryTextColor, viewBackground } from "../helpers/theme";
import headerView from "../helpers-views/header-view";
import closeView from "../helpers-views/close-view";
import { setHorizontal } from "../helpers/config";
import createInputElement from "../helpers-views/create-input-element";
import searchCountry from "../events-views/search-country";
import * as countries from "../../resources/json/countries.json";

export default function selectCountry(){

      return new Promise((resolve)=>{
             
            const area = new Composite({

                layoutData: "stretch",
                background: viewBackground, 
                transform: setHorizontal,
                id: 'select-country', 
                class: 'activeView'
        
            }).append(
        
                headerView(backButtonCallback, "Sélectionner votre pays", "back"),
                createInputElement({inputPlaceholder: "Recherchez un pays", inputName: "search-country", imgPath: "magnify-48px", enterKeyTypeValue: "search", keyboardValue: "default"}),
                
                new CollectionView({
        
                    top: ["prev()", 15],
                    left:15,
                    right:0,
                    bottom:0,
                    columnCount:1,
                    itemCount: countries.length,
                    fastScroll: false,
                    cellHeight: 64,
                    scrollbarVisible: false,
                    id:"countries-list",
                    createCell:()=>{
                        const cell = new Composite({
                            
                            height:64,
                            left:0,
                            right:0,
                            elevation:1
        
                        }).append(
        
                            new ImageView({
        
                                left:0,
                                centerY: 0, 
                                width: 32, 
                                height: 32, 
                                id: "country-image"
                            }),
                            new TextView({
                                
                                centerY:0,
                                left: ["prev()", 15],
                                right:15,
                                maxLines:1,
                                textColor: primaryTextColor,
                                font: "14px manrope",
                                id: "country-name"
                            }),
                            new Composite({
                                
                                left:0,
                                right:15,
                                height:1,
                                bottom:0,
                                background: "#eeeeee",
                                id: "country-informations"
                            })
                        ).onTap(({target})=>{
                            
                              resolve(target.find("#country-informations").only().data);
                              return closeView(area);
                        })
        
                        return cell;
                    },
        
                    updateCell:(cell, index)=>{
        
                            cell.find("#country-image").only().set({
                                
                                image: `resources/icons/flags/${countries[index]?.alpha2}.png`,
                                width: 28,
                                height: 28
                            });
                            cell.find("#country-name").only().text = countries[index]?.name;
                            cell.find("#country-informations").only().set({

                                data:{
                                     countryAlpha2: countries[index]?.alpha2,
                                     countryName: countries[index]?.name,
                                     countryImage: `resources/icons/flags/${countries[index]?.alpha2}.png`
                                }
                            }) 
                    }
                })
            ).onTap(()=>{
        
            }).appendTo(contentView);
        
            return viewAnimationEntrance(area).then(()=>{
                  return searchCountry(countries);
            });
        
            function backButtonCallback(){ 
                
                return closeView(area);
        
            }
    
      })
}