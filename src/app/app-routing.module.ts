import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';


const routes:Routes =[
  {path:'accueil', component:AccueilComponent},
  {path:'produits', component:ListproduitsComponent},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', component:Error404Component}

  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
