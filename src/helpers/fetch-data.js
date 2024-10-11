
/** 
   * This helper is used to retrieve and send data to the server
   * @param {headers} object
   * @param {requestData} string
   * @param {url} string
   * @return {promise} object
*/

import { app } from "tabris";
import {url} from "./config.js";

export default function fetchData(options, requestData, endpoint){

    return new Promise((resolve)=>{

        const userToken = localStorage.getItem("token");
        let statusCode;

        options = options ?? {

            method: "POST",
            body:JSON.stringify(requestData),
            timeout: 16000,
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            }
        };

       
        options.headers.Authorization = `Bearer ${userToken}`;

        return fetch(`${url}/${endpoint}`, options).then((response)=>{
            statusCode = response?.status;
            return response.json();

        }).then((result)=>{
            result.statusCode = statusCode;
            return resolve(result);

        }).catch((error)=>{
             
            // Do not change this response
             return resolve({Message: "Problem with database or request"});

        });
     });

}
