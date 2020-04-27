import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css'],
})
export class PeopleFormComponent implements OnInit {
  title = 'Nova pessoa';

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/',
    save: '/',
  };

  public readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'id', key: true, visible: false },
    { label: 'Nome', property: 'name', divider: 'Dados pessoais' },
    { label: 'Data de nascimento', property: 'birthdate', type: 'date' },
    {
      label: 'Gênero',
      property: 'genre',
      gridXlColumns: 4,
      options: [
        { value: 'feminino', label: 'Feminino' },
        { value: 'masculino', label: 'Masculino' },
      ],
    },
    { label: 'Rua', property: 'street', divider: 'Endereço' },
    { label: 'Cidade', property: 'city' },
    { label: 'País', property: 'country' },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params.id ? 'Editando' : 'Nova pessoa';
    });
  }
}
