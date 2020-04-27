import { Component } from '@angular/core';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent {
  readonly actions: PoPageDynamicTableActions = {
    detail: 'people/view/:id',
    edit: 'people/edit/:id',
    new: 'people/new',
    remove: true,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true },
    { property: 'name', label: 'Nome' },
    { property: 'birthdate', label: 'Data de nascimento', type: 'date' },
  ];
}
