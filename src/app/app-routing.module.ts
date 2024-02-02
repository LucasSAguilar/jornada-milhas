import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  /* AQUI É ONDE DEFINIMOS AS ROTAS DO NOSSO ANGULAR */

  {
    /* 
    EXEMPLO DA HOME

    Na rota "" (inicial), abra o componente HomeComponent 
    Esse HomeComponent se trata do "home", todavia ao criar o "home" ele atribui como home.component,
    e na hora de declarar ele modifica para HomeComponent

    se fosse a página "sobre" --> | sobre - sobre.component - SobreComponent |
    */

    path: '',
    component: HomeComponent

    // ----
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
