import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'people',
    loadChildren: () => import('../app/people/people.module').then(m => m.PeopleModule)
  },
  { path: '', redirectTo: '/people', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }