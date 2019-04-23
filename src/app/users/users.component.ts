import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  usersS: User[];

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    return this.dataService.getUsers()
    .subscribe( data => this.usersS = data );
  }

}
