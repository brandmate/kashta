import {Injectable} from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
// import {Http,RequestOptions, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class KashtaApi
{
    http: any;
    baseUrl : String;
    loginUrl: any;
    logoutUrl: any;
    constructor(ttp: Http){
        this.http = ttp;
        //this.baseUrl = 'http://localhost:52506/umbraco/api/TestApi/GetPr  oducts';
        //this.baseUrl = 'https://jsonplaceholder.typicode.com/posts/1';
        // this.baseUrl = 'http://localhost:51489/Umbraco/Api/KashtaApiSurface/GetFeaturedProducts';
        // this.logoutUrl = 'http://localhost:51489/Umbraco/Api/KashtaApiSurface/GetLogOut';
        this.baseUrl = 'http://demo2.kashta.ae/Umbraco/Api/KashtaApiSurface/GetFeaturedProducts';
        this.logoutUrl = 'http://demo2.kashta.ae/Umbraco/Api/KashtaApiSurface/GetLogOut';
       
    }
    GetFeaturedProducts()
    {
        return this.http.get(this.baseUrl).map(res => res.json());
    }
    GetLogin(name:string, password:string){
        return this.http.get('http://demo2.kashta.ae/Umbraco/Api/KashtaApiSurface/GetLogin?name='+name+'&password='+password+'').map(res => res.json());
    }
    // GetLogin(name: string, password:string){
    //     console.log("i am in API page");
    // }
    GetLogout(){
        return this.http.get(this.baseUrl).map(res => res.json());
    }
    GetRegistered(signUp){
        return this.http.get('http://demo2.kashta.ae/Umbraco/Api/KashtaApiSurface/GetRegistered?name='+signUp.name+'&surName='+signUp.surName+'&email='+signUp.email+'&password='+signUp.password+'').map(res => res.json());
    }

}

