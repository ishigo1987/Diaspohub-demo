import { Tab, Row, Composite, ImageView, TextView, Image, ScrollView, Stack } from "tabris";
import { primaryTextColor, viewBackground, maskBackground, secondaryViewColor, primaryColor, secondaryTextColor, primaryBackgroundIcon } from "../helpers/theme";
import createIcon from "../helpers-views/create-icon";
import createInputElement from "../helpers-views/create-input-element";
import createOptionsBullets from "../helpers-views/create-options-bullets";
import createPictureBullet from "./create-picture-bullet";
import transaction from "./transaction";

export default function homeTab(){
      
      const fullName = JSON.parse(localStorage.getItem("user")).fullName;
      return new Tab({
        layoutData: "stretch",
        background: secondaryViewColor, 
        id: 'home-tab', 
        image: {src: "resources/icons/home-64px.png"},
        title: "Accueil"
        
      }).append(
         
          new Composite({
               
               top:40,
               left:15,
               right: 15,
               height:70
          }).append(
                  
              new ImageView({
                
                centerY:0,
                left:0,
                width:50,
                height:50,
                cornerRadius:100,
                scaleMode: "fill",
                image: {src: "resources/images/profile.jpg", width: 50, height: 50},
                id: "profile-picture"
              }),
              new TextView({
                  
                   top: 13,
                   left: ["#profile-picture", 10],
                   maxLines: 1,
                   text: "Bonjour",
                   textColor: primaryTextColor,
                   font: "bold 18px manrope"
              }),
              new TextView({
                   top: ["prev()", 0],
                   left: ["#profile-picture", 10],
                   right: 100,
                   maxLines:1,
                   text:fullName,
                   textColor: maskBackground,
                   font: "14px manrope"

              }),
              createIcon({imgName: "notification-48px", side: "right"} ),
              createIcon({imgName: "settings-64px", side: "right", position: 15} ),
          ),
          createInputElement({inputPlaceholder: "Recherchez...", inputName: "search-country", imgPath: "magnify-48px", enterKeyTypeValue: "search", keyboardValue: "default"}),

          new ScrollView({
              top:["prev()", 0],
              left:0,
              right:0,
              bottom:0,
              scrollbarVisible: false,
          }).append(
                
            new Row({
              top: ["prev()",15],
              left:15,
              right:15,
              spacing:16,
              alignment:"centerY",
              id:"other-nav"
            }).append(
                
                new Composite({
                    
                    cornerRadius:15,
                    height:35,
                    background: primaryColor,
                    id: "dashboard"
                }).append(

                    new TextView({
                        left:15,
                        right:15,
                        centerY:0,
                        alignment: "centerX",
                        text: "Portefeuille",
                        textColor: secondaryTextColor,
                        font:"bold 12px manrope"
                    })
                ),
                new Composite({
                    
                    cornerRadius:15,
                    height:35,
                    background: "transparent",
                    id: "card"
                }).append(

                    new TextView({
                        left:15,
                        right:15,
                        centerY:0,
                        alignment: "centerX",
                        text: "Cartes",
                        textColor: primaryTextColor,
                        font:"bold 12px manrope"
                    })
                ),
                new Composite({
                    
                  cornerRadius:15,
                  height:35,
                  background: "transparent",
                  id: "history"
                }).append(

                    new TextView({
                        left:15,
                        right:15,
                        centerY:0,
                        alignment: "centerX",
                        text: "Historique",
                        textColor: primaryTextColor,
                        font:"bold 12px manrope"
                    })
                )
            ),

            new Composite({
                top: ["prev()",15],
                left:15,
                right: 15,
                padding:15,
                cornerRadius:15,
                background: viewBackground,
                id: "composite-wallet"
            }).append(
                new TextView({
                    top:0,
                    left:0,
                    right:0,
                    alignment: "left",
                    text: "solde du portefeuille",
                    textColor: primaryTextColor,
                    font:"14px manrope",
                    id: "wallet-balance"
                }),
                new TextView({
                    top: ["prev()", 5],
                    left:0,
                    textColor: primaryTextColor,
                    maxLines: 1,
                    text: "985,436",
                    font:"bold 30px manrope"
                }),
                new TextView({
                    
                    top: ["#wallet-balance", 20],
                    right:0,
                    left:["prev()", 2],
                    maxLines: 1,
                    text: "XAF",
                    textColor: primaryTextColor,
                    font:"11px manrope"
                }),

                new ImageView({
                
                  top: 20,
                  right:0,
                  width:50,
                  height:50,
                  cornerRadius:100,
                  background: "#f5f5f5",
                  image: {src: "resources/icons/flags/cm.png", width: 28, height: 28},
                }),

                new Row({

                    top: ["prev()",0],
                    left:0,
                    right:0,
                    spacing:5,
                    alignment:"centerY",
                    id:"options-nav"
                }).append(

                    createOptionsBullets("plus-48px", "Dépôt"),
                    createOptionsBullets("send-48px", "Envoi"),
                    createOptionsBullets("withdraw-48px", "Retrait"),
                    createOptionsBullets("dots-horizontal-48px", "Plus")
                )
            ),

            new TextView({
                 top: ["prev()", 30],
                 left:15,
                 text: "Transferts",
                 textColor: primaryTextColor,
                 font: "bold 18px manrope"
            }),
            new TextView({
                 top: ["#composite-wallet", 30],
                 right: 15,
                 text: "Voir tout",
                 textColor: primaryColor,
                 font: "bold 14px manrope"
            }),

            new ScrollView({
                
                top: ["prev()",0],
                left:0,
                right:0,
                direction: "horizontal",
                scrollbarVisible: false,
                id: "transferts-list"
            }).append(

              createOptionsBullets("plus-48px", "Ajouter"),
              createPictureBullet("girl1.jpg", "Cindy"),
              createPictureBullet("girl2.jpg", "Laeticia"),
              createPictureBullet("guy2.avif", "Martin"),
              createPictureBullet("girl3.jpg", "Stéphanie"),
              createPictureBullet("guy3.avif", "Frédéric"),
              createPictureBullet("girl4.jpg", "Gaelle"),
              createPictureBullet("guy5.jpg", "Franck"),
              createPictureBullet("girl5.jpg", "Cécile"),
              createPictureBullet("profile.jpg", "Bastien")
            ),

            new TextView({
              top: ["prev()", 30],
              left:15,
              text: "Transactions",
              textColor: primaryTextColor,
              font: "bold 18px manrope"
            }),
            new TextView({
                  top: ["#transferts-list", 30],
                  right: 15,
                  text: "Tout afficher",
                  textColor: primaryColor,
                  font: "bold 14px manrope"
            }),

            new Stack({
                
                top: ["prev()", 15],
                left:15,
                right: 15,
                spacing: 15,
                background:viewBackground,
                cornerRadius: 15
            }).append(

               transaction("financial-pelerin", "Le pèlerin", "9 oct. 16:37", "30000"),
               transaction("google-192px", "Google", "28 Sep. 11:00", "5000"),
               transaction("shopping-bag", "Glothelo", "20 Sep. 09:00", "15000"),
               transaction("figma", "Figma", "05 Sep. 16:00", "3500"),
               transaction("amazon", "Amazon", "30 Aout. 13:00", "135000")
            ),

            new Composite({
                top:["prev()",0],
                height:20
            })
           
          ),

      )

}