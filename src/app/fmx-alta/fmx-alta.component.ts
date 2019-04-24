import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../data.service';
import { usrFMX } from '../models/usrFMX.model';

@Component({
  selector: 'app-fmx-alta',
  templateUrl: './fmx-alta.component.html',
  styleUrls: ['./fmx-alta.component.sass']
})
export class FmxAltaComponent implements OnInit {

  datosForm:usrFMX;

  usrform = new FormGroup({
    name    : new FormControl(),
    username: new FormControl(),
    email   : new FormControl()
  });

  constructor( private dataService:DataService , private ruta:Router ) {}

  ngOnInit() {
  }

  guardar() {
    this.dataService.updateFMXUsr( this.usrform.value )
    .subscribe(
      datos => console.log( datos ),
      er => console.log( er )
    );

    this.ruta.navigateByUrl( '/fmx-listado' );
  }

}
