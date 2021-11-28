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