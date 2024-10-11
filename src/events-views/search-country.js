import { contentView } from "tabris";

export default function searchCountry(countries){
      
       const input = contentView.find("#search-country").only();
       let selectedIndex;
       const countriesCollection = contentView.find("#countries-list").only();

       input.on({
           
            input:({target})=>{
                  
                selectedIndex = countries.findIndex((country)=>{
                              
                    return country.name.toLowerCase().includes(target.text.toLowerCase()) === true;
                });

                const offsetIndex = Number(countriesCollection.lastVisibleIndex) - Number(countriesCollection.firstVisibleIndex);
                return countriesCollection.reveal(selectedIndex, {animate: false, offset:offsetIndex});
                
                     
            }
       })
}