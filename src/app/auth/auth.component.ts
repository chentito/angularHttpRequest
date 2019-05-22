import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Token } from '../models/token.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {
  tokenM: Token;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
    return this.authService.getApiToken()
    .subscribe( data => this.tokenM = data );
  }

}
