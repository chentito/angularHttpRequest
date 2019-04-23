import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models/user.model';
import { Posts } from './models/posts.model';
import { Album } from './models/album.model';
import { usrFMX } from './models/usrFMX.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL = 'https://jsonplaceholder.typicode.com';
  apiFMX = 'http://192.168.30.104/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      //'Content-Type':  'application/json',
      //'Content-Type': 'application/x-www-form-urlencoded;',
      'Content-Type' : 'text/plain',
      'Access-Control-Allow-Origin': '*'
    })
  };

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
    return this._http.post<usrFMX>( this.apiFMX + '/users' , datos );
  }

}
