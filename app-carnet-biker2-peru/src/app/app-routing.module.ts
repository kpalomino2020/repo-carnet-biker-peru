import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { BikerComponent } from './components/biker/biker.component';
import { CarnetBikerComponent } from './components/carnet-biker/carnet-biker.component';
import { HomeComponent } from './components/home/home.component';
import { ListBikerComponent } from './components/list-biker/list-biker.component';

const routes: Routes = [
  {  path:'', component:HomeComponent  },
  {  path:'login', component:LoginComponent},
  {  path:'list-bikers', component:ListBikerComponent  },
  {  path:'crear-bikers', component:BikerComponent },
  {  path:'carnet-resultado', component:CarnetBikerComponent  },
  {  path:'**', redirectTo:'list-bikers', pathMatch:'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
