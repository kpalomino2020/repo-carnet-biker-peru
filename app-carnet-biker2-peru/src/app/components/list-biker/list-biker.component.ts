import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Biker } from 'src/app/models/biker.model';
import { BikerService } from 'src/app/services/biker.service';

@Component({
  selector: 'app-list-biker',
  templateUrl: './list-biker.component.html',
  styleUrls: ['./list-biker.component.css']
})
export class ListBikerComponent implements OnInit {

 
 
  
  constructor() 
    { 
     

    }


  ngOnInit(): void {
  }

  
}
