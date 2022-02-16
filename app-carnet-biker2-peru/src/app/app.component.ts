import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-carnet-biker-peru';
  kennedy = 'kennedy palomino';

  saludo = "Ejemplo de como hacer un codigo QR con QR Code Generator";
  //tipoElemento = NgxQrcodeElementTypes.CANVAS;
  
  //valor: string = "www.refactorizando.blog";
  url = 'https://carnet-biker2-peru.web.app/';
  profile = 'routeToMyProfile';
  elementType = NgxQrcodeElementTypes.URL;
  errorCorrectionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  //value = this.url + this.profile;//"https://carnet-biker2-peru.web.app/";
  //value = 'https://www.geeksforgeeks.com/';
  value = 'https://carnetbikerperu.web.app/';
}
