import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import { Posts } from './models/posts.model';
import { Album } from './models/album.model';
import { usrFMX } from './models/usrFMX.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiURL = 'https://jsonplaceholder.typicode.com';
  apiFMX = 'http://192.168.30.104/api';

  private headers = new HttpHeaders({ 'Content-Type':  'application/json' });

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<User[]>( this.apiURL + '/users');
  }

  getPosts() {
    return this._http.get<Posts[]>( this.apiURL + '/posts' );
  }

  getAlbums() {
    return this._http.get<Album[]>( this.apiURL + '/albums' );
  }

  updateFMXUsr( datos:usrFMX ) {
    let datosJSON = JSON.stringify( datos );
    return this._http.post( this.apiFMX + '/users' , datosJSON );
  }

  getFMXUsr() {
    return this._http.get<usrFMX[]>( this.apiFMX + '/users' );
  }

  delFMXUsr( id:number ): Observable<{}> {
    return this._http.delete( this.apiFMX + '/users/' + id , httpOptions );
  }

}
