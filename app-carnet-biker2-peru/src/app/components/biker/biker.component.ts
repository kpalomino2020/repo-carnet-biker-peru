import { style } from '@angular/animations';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Biker, Persona } from 'src/app/models/biker.model';
import { BikerService } from 'src/app/services/biker.service';
import { ReniecRestApiService } from 'src/app/services/reniec-rest-api.service';

@Component({
  selector: 'app-biker',
  templateUrl: './biker.component.html',
  styleUrls: ['./biker.component.css']
})
export class BikerComponent implements OnInit {

  //variables de form
  createBiker: FormGroup;
  createCopiloto1:FormGroup;

  //variables de control de pasos
  submitted = false;
  submitted1 = false;
  step1activo = true;
  step2activo = false;

  nombreBiker: string = '';
  apellidoBiker: string = '';
  nombreCopiloto: string = '';
  apellidoCopiloto: string = '';
  constante:string ='';

  

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

  //----Constructor------
  constructor(private fb:FormBuilder , 
    private bikerService:BikerService,
    private reniecRestApi:ReniecRestApiService,
     // private firestore:AngularFirestore,
      private router: Router) { 
   
    /**===========Validaciones========= */
  //validar Biker
    this.createBiker = this.fb.group({
      dniBiker: ['',Validators.required],
      nombreBiker: [],
      apellidoBiker: [],      
      placa: ['',Validators.required],
      modeloMoto: [],
      estadoMoto: [],
      propietarioMoto: []
    });

    //validar copiloto
    this.createCopiloto1 = this.fb.group({
      dniCopiloto1: ['',Validators.required],
      nombreCopiloto1: [],
      apellidoCopiloto1: []
    });

  }

  ngOnInit(): void {
    

    
  }

  /***Obtiene los registros del Piloto */
  agregarBiker(){
    this.submitted =true;
    if(this.createBiker.invalid){
      return;
    }
    
    this.paso2Activo();

  }

 /***Obtiene los datos del copiloto */
  agregarCopiloto1(){
    this.submitted1 =true;
    if(this.createCopiloto1.invalid){
      return;
    }
  
    this.bikerModel.id = this.createBiker.value.dniBiker,
    this.bikerModel.dniBiker = this.createBiker.value.dniBiker,
    this.bikerModel.nombreBiker = this.createBiker.value.nombreBiker,
    this.bikerModel.apellidoBiker = this.createBiker.value.apellidoBiker,     
    this.bikerModel.placa = this.createBiker.value.placa,
    this.bikerModel.modeloMoto = this.createBiker.value.modeloMoto,
    this.bikerModel.estadoMoto = this.createBiker.value.estadoMoto,
    this.bikerModel.propietarioMoto = this.createBiker.value.propietarioMoto,
    this.bikerModel.apellidoCopiloto1 = this.createCopiloto1.value.apellidoCopiloto1,
    this.bikerModel.dniCopiloto1 = this.createCopiloto1.value.dniCopiloto1,
    this.bikerModel.nombreCopiloto1 = this.createCopiloto1.value.nombreCopiloto1,
    this.bikerModel.fechaCreacion = new Date(),
    this.bikerModel.fechaActualizacion = new Date()
   

  // this.firestore.collection('biker').add(bikerModel);// registra en la base de datos
   this.bikerService.addBiker(this.bikerModel);
  
   sessionStorage.setItem('DNI_BIKER_KEY', this.createBiker.value.dniBiker);

    this.router.navigateByUrl('/carnet-resultado');
  }

  /****Buscar DNI Biker */
  buscarDNIBiker(){ 
    
    this.showLoadingBtn();
    this.reniecRestApi.getDatosDNI(this.createBiker.value.dniBiker).subscribe((data: Persona) => {
        this.nombreBiker = data.nombres;
        this.apellidoBiker = data.apellidoPaterno+" "+data.apellidoMaterno;
        this.hideLoadingBtn();
      })  
  }

  /*****Buscar placa */
  buscarPlaca(){
    const id_placa = document.getElementById('id_placa');
    this.constante = "En proceso...";
    id_placa?.focus();
  }


  /****Buscar copiltot */
  buscarDnicopiloto(){
 

    this.showLoadingBtnCopiloto();

    this.reniecRestApi.getDatosDNI(this.createCopiloto1.value.dniCopiloto1).subscribe((data: Persona) => {
       this.nombreCopiloto = data.nombres;
       this.apellidoCopiloto = data.apellidoPaterno+" "+data.apellidoMaterno;
       this.hideLoadingBtnCopiloto();
    })
   
     
  }

  /****Volver paso2-->1 */
  volver(){
    this.step1activo = false;
    this.step2activo = true;

    const barStep = document.getElementById('bar-steps');
    const step1 = document.getElementById('step1-id');
    const step2 = document.getElementById('step2-id');
    const step3 = document.getElementById('step3-id');

    if(this.step2activo){      
      barStep?.setAttribute("style","width: 0%;");
      step2?.classList.remove("btn-primary");
      step2?.classList.add("btn-secondary");

      step1?.classList.add("btn-primary");
      step1?.classList.remove("btn-secondary");

      this.step1activo = true;
      this.step2activo = false;
    }
  }

  paso2Activo(){
    this.step1activo = false;
    this.step2activo = true;

    const barStep = document.getElementById('bar-steps');
    const step1 = document.getElementById('step1-id');
    const step2 = document.getElementById('step2-id');
    const step3 = document.getElementById('step3-id');

    if(this.step2activo){      
      barStep?.setAttribute("style","width: 50%;");
      step2?.classList.add("btn-primary");
      step2?.classList.remove("btn-secondary");
    }
  }

  showLoadingBtn(){
    const id_btnBuscarDni = document.getElementById('id_btnBuscarDni');
    const id_spanBtnDniBiker = document.getElementById('id_spanBtnDniBiker');
    const id_placa = document.getElementById('id_placa');

    id_spanBtnDniBiker?.classList.add("d-inline-block");
    id_spanBtnDniBiker?.classList.remove("d-none");
    id_btnBuscarDni?.classList.add("disabled"); 
  }


  hideLoadingBtn(){
    const id_btnBuscarDni = document.getElementById('id_btnBuscarDni');
    const id_spanBtnDniBiker = document.getElementById('id_spanBtnDniBiker');
    const id_placa = document.getElementById('id_placa');

    id_spanBtnDniBiker?.classList.add("d-none");
    id_spanBtnDniBiker?.classList.remove("d-inline-block");

    id_btnBuscarDni?.classList.remove("disabled"); 

    id_placa?.focus();
  }

  showLoadingBtnCopiloto(){
    const id_btnBuscarDniCopiloto = document.getElementById('id_btnBuscarDniCopiloto');
    const id_spanBtnDniCopiloto = document.getElementById('id_spanBtnDniCopiloto');

    id_spanBtnDniCopiloto?.classList.add("d-inline-block");
    id_spanBtnDniCopiloto?.classList.remove("d-none");
    id_btnBuscarDniCopiloto?.classList.add("disabled"); 
  }

  hideLoadingBtnCopiloto(){
    const id_btnBuscarDniCopiloto = document.getElementById('id_btnBuscarDniCopiloto');
    const id_spanBtnDniCopiloto = document.getElementById('id_spanBtnDniCopiloto');

    id_spanBtnDniCopiloto?.classList.add("d-none");
    id_spanBtnDniCopiloto?.classList.remove("d-inline-block");
    id_btnBuscarDniCopiloto?.classList.remove("disabled"); 
  }

  
}



