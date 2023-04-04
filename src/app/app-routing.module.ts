import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeInterventionsComponent } from './liste-interventions/liste-interventions.component';
import { AddInterComponent } from './add-inter/add-inter.component';

const routes: Routes = [
  { path: 'list', component: ListeInterventionsComponent },
  { path: 'addInter', component: AddInterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
