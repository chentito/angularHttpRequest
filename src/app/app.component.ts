import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Posts } from './posts.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  //usersS: User[];
  postsS: Posts[];

  constructor(private dataService: DataService){}
  
  ngOnInit(){
    //return this.dataService.getUsers()
    //.subscribe(data => this.usersS = data);

    return this.dataService.getPosts()
    .subscribe( data => this.postsS = data );
  }

}
