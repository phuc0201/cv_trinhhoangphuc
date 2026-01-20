import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FullstackComponent } from './fullstack.component';



@NgModule({
  declarations: [
    FullstackComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FullstackComponent
      }
    ])
  ]
})
export class FullstackModule { }
