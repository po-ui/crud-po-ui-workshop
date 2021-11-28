import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleViewComponent } from './people-view/people-view.component';
import { PeopleFormComponent } from './people-form/people-form.component';

const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'view/:id', component: PeopleViewComponent },
  { path: 'edit/:id', component: PeopleFormComponent },
  { path: 'new', component: PeopleFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }