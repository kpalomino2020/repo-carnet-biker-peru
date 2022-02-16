export interface Biker {
    id?: string;
    dniBiker: string;
    nombreBiker: string;
    apellidoBiker: string;   
    placa: string;
    modeloMoto: string;
    estadoMoto: string;
    propietarioMoto: string;
    apellidoCopiloto1: string;
    dniCopiloto1: string;
    nombreCopiloto1: string;
    fechaCreacion : Date;
    fechaActualizacion : Date;
}

export class Persona {
    dni!: string;
    nombres!: string; 
    apellidoPaterno!: string; 
    apellidoMaterno!: string;
    codVerifica!: number;
}

     