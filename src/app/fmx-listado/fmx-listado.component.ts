import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { usrFMX } from '../models/usrFMX.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-fmx-listado',
  templateUrl: './fmx-listado.component.html',
  styleUrls: ['./fmx-listado.component.sass']
})
export class FmxListadoComponent implements OnInit {
  usrs: usrFMX[];

  constructor( private dataService: DataService, private ruta: Router ) { }

  ngOnInit() {
    return this.dataService.getFMXUsr()
      .subscribe( data => this.usrs = data );
  }

  eliminaElemento( id:number ) {
    this.dataService.elimina( id ).subscribe();
    this.ruta.navigateByUrl( '/fmx-listado' );
    /*return this.dataService.delFMXUsr( id ).subscribe (
      () => this.ruta.navigateByUrl( '/fmx-listado' ),
      (err) => console.log( "errores " + JSON.stringify( err ) )
    );
    return this.dataService.delFMXUsr( id );
    return this.dataService.elimina( id );
    return this.dataService.eliminaFMXUsr( id ).subscribe();*/
  }

}
