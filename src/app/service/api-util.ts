import {Headers} from "@angular/http";

let API = {
        baseURL: 'http://dudgns05072.cafe24.com:3000/',
        baseHeader : 
           new Headers({
               'Content-Type': 'application/json'
           })
       };

export {API};