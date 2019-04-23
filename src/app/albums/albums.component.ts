import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass']
})
export class AlbumsComponent implements OnInit {
  albumS:Album[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    return this.dataService.getAlbums()
    .subscribe( data => this.albumS = data );
  }

}
