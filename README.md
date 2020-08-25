# Implementando CRUD com PO-UI

Este projeto foi desenvolvido com o desafio de construir um CRUD básico utilizando po-ui.

### Apresentação

Link da [Apresentação](https://docs.google.com/presentation/d/e/2PACX-1vS3MgYK1Tcnto5C9k0j3pswXIRyWztkLF3A2r0weQd-STL0w6cYFfW-7MNyuLt37a6BHEh0VxDqo8rr/pub?start=false&loop=false&delayms=60000)

### Versão correta do angular cli.

> Bash

```
  npm i -g @angular/cli@10
```

### Inicializando um projeto angular novo.

> Bash

```
 ng new crud-po --routing --style=css
 cd crud-po
```

### Adicionando po ao projeto.

> Bash

```
 ng add @po-ui/ng-components
 ng add  @po-ui/ng-templates
```

### Configuração dos módulos do projeto

### Criação do módulo de Shared.

> Bash

```
 ng g m shared
```

### shared.module.ts

> TS

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoTemplatesModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoTemplatesModule
  ]
})
export class SharedModule { }

```

### app.module.ts

> TS

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### Criação do módulo de pessoas.

> Bash

```
 ng g m people --routing
```

### Criação do componente de Lista

> Bash

```
 ng g c people/people-list
```

### Criação do componente de Visualização.

> Bash

```
 ng g c people/people-view
```

### Criação do componente de Formulário de Edição.

> Bash

```
 ng g c people/people-form
```

### people.module.ts

> TS

```
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

```

### people-rounting.module

> TS

```
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
```

### app-routing.module.ts

> TS

```
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

```

### app.component.html

> HTML

```
<div class="po-wrapper">
  <po-toolbar p-title="Workshop po"></po-toolbar>

  <po-menu [p-menus]="menus"></po-menu>

  <router-outlet></router-outlet>
</div>
```

### app.component.ts

> TS

```
import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [{ label: 'Pessoas', link: '/people' }];
}
```

### people-list.component

> HTML

```
<po-page-dynamic-table
  p-title="Pessoas"
  p-service-api="https://po-sample-api.herokuapp.com/v1/people"
  [p-actions]="actions"
  [p-fields]="fields">
</po-page-dynamic-table>
```

> TS

```
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

```

### people-view.component

> HTML

```
<po-page-dynamic-detail
  p-service-api="https://po-sample-api.herokuapp.com/v1/people"
  [p-title]="title"
  [p-actions]="actions"
  [p-fields]="fields">
</po-page-dynamic-detail>
```

> TS

```
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


```

### people-form.component

> HTML

```
<po-page-dynamic-edit
  p-service-api="https://po-sample-api.herokuapp.com/v1/people"
  [p-title]="title"
  [p-actions]="actions"
  [p-fields]="fields">
</po-page-dynamic-edit>
```

> TS

```
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

```

### Execução do Projeto

> Bash

```
 ng serve --o
```
