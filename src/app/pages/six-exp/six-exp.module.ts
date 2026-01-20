import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SixExpComponent } from './six-exp.component';

const routes = [
  {
    path: '',
    component: SixExpComponent
  }
];

@NgModule({
  declarations: [
    SixExpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SixExpModule { }
