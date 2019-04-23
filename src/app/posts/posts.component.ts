import { Component, OnInit } from '@angular/core';
import { Posts } from '../models/posts.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  postsS: Posts[];

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    return this.dataService.getPosts()
    .subscribe( data => this.postsS = data );
  }

}
