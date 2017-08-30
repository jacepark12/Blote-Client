import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Router } from '@angular/router';

import { CookieService } from './cookie.service';

import 'rxjs/add/operator/map';

import * as web3 from 'Web3';
import {API} from './api-util';

import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';

@Injectable()
export class AuthService {

    baseURL = API.baseURL;
    constructor(private http: Http, private router: Router, private cookie: CookieService, private fb: FacebookService) {
        fb.init({
            appId: '109089776436251',
            version: 'v2.10'
        });
    }

    fbLogin() {
        this.fb.login()
            .then((response: LoginResponse) => {
                console.log(response);
                this.cookie.setCookie('type', "fb", 1);
                location.href = '/home';
            }
            )

            .catch((error: any) => console.error(error));
    }

    signup(name: String, email: String, pwd: String, org: String) {
        let url = API.baseURL + "users/signup";
        let body = {
            "name": name,
            "id": email,
            "pw": pwd,
            "org": org
        }
        let headers = API.baseHeader;

        let options = new RequestOptions({
            headers: headers
        });

        this.http.post(url, body, options)
            .map(res => res.json())
            .subscribe(
            res => {
                console.log("성공");
                console.log("Response : " + res);
                location.href = '';
            },

            error => {
                alert("계정이 이미 존재합니다.");
                console.log(error);
                if(error.status.code == 400) {
                    alert(error.status.message);
                }
            }
            );
    }

    login(email: String, pwd: String) {
        let url = API.baseURL + "users/signin";
        let body = {
            "id": email,
            "pw": pwd
        }
        let headers = API.baseHeader;

        let options = new RequestOptions({
            headers: headers
        });

        this.http.post(url, body, options)
            .map(res => res.json())
            .subscribe(
            res => {
                alert("성공");
                console.log("성공");
                console.log("Response : " + res.token);
                location.href = '';
                this.cookie.setCookie('id_token', res.token, 1);
            },

            error => {
                alert("실패");
                console.log("오류");
                console.log(error.status);
            }
            );
    }


    loggedIn() {

        if(this.cookie.getCookie('id_token')){
            return true;
        }else{
            return false;
        }
    }

    logout() {
        this.cookie.delete_cookie('id_token');
        this.cookie.delete_cookie('type');
        this.cookie.delete_cookie('user_id');

        alert("로그아웃 되었습니다.");
        location.href = '/';
    }

    private handleError(error) {
        console.error('Error processing action', error);
    }

}
