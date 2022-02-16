import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Biker } from '../models/biker.model';

@Injectable({
  providedIn: 'root'
})
export class BikerService {

  @Output() disparador: EventEmitter<any> = new EventEmitter();

  constructor(private firestore: Firestore) { }

  //Agregar biker
  addBiker(bikerBean: Biker) {    
    return setDoc(doc(this.firestore, "biker", bikerBean.dniBiker), bikerBean);
  }

  // Listar los biker
  getBikers(): Observable<Biker[]> {
    const booksRef = collection(this.firestore, 'biker');
    return collectionData(booksRef, { idField: 'id' }) as Observable<Biker[]>;
  }

  //Obtener biker por DNI
  getBikerkByDNI(dni: string) {
    const bookRef = doc(this.firestore, `biker/${dni}`);
    return docData(bookRef, { idField: 'dni' }) as Observable<Biker>;
  }

  
  pasarDNI(dni:string){
    console.log("Se envia el dato:::"+dni);
    this.disparador.emit(dni);
  }

  /*
  getDNI(){
    console.log("Vamos leer el valor");
    this.recepcion.subscribe(valor =>{
      console.log("Recibiendo datos...",valor);
    });
  }*/

}
