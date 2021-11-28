import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleViewComponent } from './people-view/people-view.component';
import { PeopleFormComponent } from './people-form/people-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PeopleListComponent, PeopleViewComponent, PeopleFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }