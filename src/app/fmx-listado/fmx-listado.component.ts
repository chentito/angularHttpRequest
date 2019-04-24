import { Component, OnInit } from '@angular/core';
import { usrFMX } from '../models/usrFMX.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fmx-listado',
  templateUrl: './fmx-listado.component.html',
  styleUrls: ['./fmx-listado.component.sass']
})
export class FmxListadoComponent implements OnInit {
  usrs: usrFMX[];

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    return this.dataService.getFMXUsr()
          .subscribe( data => this.usrs = data );
  }

  eliminaElemento( id:number ) {
    return this.dataService.delFMXUsr( id ).subscribe(
      d => console.log( "Resp " + d ),
      err => console.log( "Err " + JSON.stringify(err) )
    );
  }

}
