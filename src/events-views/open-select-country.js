import { contentView } from "tabris";
import selectCountry from "../views/select-country";
import { getCountryCodeForRegionCode } from 'awesome-phonenumber';

export default function openSelectCountry(){
 
      contentView.find("#select-country").last().onTap(()=>{
         
             return selectCountry().then((response)=>{
                   
                   contentView.find("#country-flag").last().image = {src: response?.countryImage, width: 24, height: 24};
                   contentView.find("#country-text").last().text = response?.countryName;
                   contentView.find("#phone-number").last().text = `+${getCountryCodeForRegionCode(response?.countryAlpha2)}`;
             })
      });
}