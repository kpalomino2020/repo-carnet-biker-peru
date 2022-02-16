import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BikerService } from 'src/app/services/biker.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private bikerService:BikerService) { }

  ngOnInit(): void {
   
    
  }

  enviar(){
    console.log("Enviando datos::");
    this.bikerService.disparador.emit({dni:"88888888888"});
  }

}
