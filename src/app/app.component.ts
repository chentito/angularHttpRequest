import { Component, OnInit } from '@angular/core';
import { Posts } from './posts.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  postsS: Posts[];

  constructor(private dataService: DataService){}
  
  ngOnInit(){
    return this.dataService.getPosts()
    .subscribe( data => this.postsS = data );
  }

}
