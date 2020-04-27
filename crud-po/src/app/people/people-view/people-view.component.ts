import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PoPageDynamicDetailActions, PoPageDynamicDetailField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-people-view',
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.css'],
})
export class PeopleViewComponent implements OnInit {
  title = 'Visualizando';

  readonly actions: PoPageDynamicDetailActions = {
    back: '/',
    edit: 'people/edit/:id',
    remove: '/',
  };

  readonly fields: Array<PoPageDynamicDetailField> = [
    { property: 'id', gridColumns: 2, key: true, divider: 'Dados pessoais' },
    { property: 'name', label: 'Nome', gridXlColumns: 4, gridLgColumns: 4 },
    {
      property: 'birthdate',
      type: 'date',
      label: 'Data de aniversário',
      gridXlColumns: 4,
      gridLgColumns: 4,
    },
    {
      property: 'genre',
      tag: true,
      label: 'Gênero',
      gridColumns: 2,
      gridSmColumns: 6,
    },
    { property: 'street', divider: 'Endereço', label: 'Rua' },
    { property: 'city', label: 'Cidade' },
    { property: 'country', label: 'País' },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params.id
        ? `Visualizando Pessoa ${params.id}`
        : 'Visualizando';
    });
  }
}
