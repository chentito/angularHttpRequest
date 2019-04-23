import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Posts } from './posts.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL = 'https://jsonplaceholder.typicode.com';

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get<User[]>( this.apiURL + '/users');
  }

  getPosts() {
    return this._http.get<Posts[]>( this.apiURL + '/posts' );
  }

}
