import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

    apiAuth = 'http://192.168.30.104/api/auth';

    constructor( private _http: HttpClient ) {}

    getApiToken(): Observable<Token> {
        let datos = JSON.stringify( { 'email': 'guish@reyesalazar.com', 'password': '774411' } );

        const params = new FormData();
        params.append('email', 'guish@reyesalazar.com');
        params.append('password', '774411');

        return this._http.post<Token> (
            this.apiAuth + '/getToken' , 
                    { email: '' , password: '' } ,
                    { headers: httpHeaders, responseType: 'json' }
        );

    }

}
