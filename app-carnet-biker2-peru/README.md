# AppCarnetBiker2Peru

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
---------------------------------------------------------------------------------------------------
https://edupala.com/angular-firebase-crud-operation-using-angularfire/?unapproved=5482&moderation-hash=ff36be22ff9faa55ca95ac5f28fe3496#comment-5482

npm install firebase

ng add @angular/fire

---------------------------------------------------------------------------------------------------
ng new app-carnet-biker2-peru

https://codigofacilito.com/articulos/deploy-angular-firebase

##PREPARANDO EL ENTORNO.
npm install -g firebase-tools

##LOGIN EN FIREBASE TOOLS
firebase login

##ANGULAR BUILD
ng build

##SUBIR EL BUILD A FIREBASE
Para comenzar con la subida ejecuta el comando init de Firebase Tools para que la herramienta configure el proyecto como un proyecto de Angular, y además, enlaza el proyecto que previamente creamos en la consola de Firebase con la carpeta actual, para eso coloca el siguiente comando:

firebase init

? What do you want to use as your public directory? (public) dist/nombre-proyecto

El siguiente paso, está relacionado con las Single Page Applications, como Angular suele contener su propio router (si no lo contiene, no importa no es necesario), escribiremos y y luego presionaremos Enter. Luego de eso, Firebase notará que ya existe un archivo index.html y te preguntará si quieres que lo sobre escriba, o no, escribe ny luego Enter para indicarle que no debe sobre escribirlo y se conserve el archivo index.html de tu proyecto Angular.
Esto debe completar el asistente de Firebase y habremos configurado con éxito nuestro directorio como una app de Angular que podemos subir al Firebase Hosting. Para terminar, vamos a ejecutar el siguiente comando que se encargará de subir nuestros archivos a Firebase para que podamos visualizar nuestra página:

firebase deploy

--------------------------------------------------------------------------------------------------------------------------