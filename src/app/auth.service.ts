import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import { Token } from './models/token.model';
//import { UserAPI } from './models/userAPI.model';
import { Observable } from 'rxjs';

let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Accept' : 'application/json'
}); 

@Injectable({
    providedIn: 'root'
}) 
export class AuthService {

    apiAuth = 'http://192.168.30.110/api/auth';

    constructor( private _http: HttpClient ) {}

    getApiToken(): Observable<any> {
        let datos = JSON.stringify( { 'email': 'guish@reyesalazar.com', 'password': '774411' } );

        let httpParams = new HttpParams()
            .append( "email"    , 'guish@reyesalazar.com' )
            .append( "password" , '774411' );

        return this._http.post<any> (
            this.apiAuth + '/getToken' , 
                    //{ email: '' , password: '' } ,
                    //JSON.stringify( params ) ,
                    JSON.stringify( httpParams ) ,
                    { headers: httpHeaders, responseType: 'json' }
        );

    }

}
