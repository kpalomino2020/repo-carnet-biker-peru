import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Biker } from 'src/app/models/biker.model';
import { BikerService } from 'src/app/services/biker.service';

@Component({
  selector: 'app-carnet-biker',
  templateUrl: './carnet-biker.component.html',
  styleUrls: ['./carnet-biker.component.css']
})
export class CarnetBikerComponent implements OnInit {

  bikerModel: Biker = { 
    id: '',
    dniBiker: '',
    nombreBiker: '',
    apellidoBiker: '',  
    placa: '',
    modeloMoto: '',
    estadoMoto: '',
    propietarioMoto: '',
    apellidoCopiloto1: '',
    dniCopiloto1: '',
    nombreCopiloto1: '',
    fechaCreacion : new Date,
    fechaActualizacion : new Date
};

  constructor(private bikerservice: BikerService, private _activeRouter: ActivatedRoute) { }

  public dniBd:string = '';

  ngOnInit(): void {
    console.log("==========");
    let dniBiker = sessionStorage.getItem('DNI_BIKER_KEY');    
    this.bikerservice.getBikerkByDNI(''+dniBiker).subscribe(biker=>{
      this.bikerModel = biker;
    });
  }

}
