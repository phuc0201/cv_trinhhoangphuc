import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';

@NgModule({
  declarations: [
    FrontendComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FrontendComponent
      }
    ])
  ]
})
export class FrontendModule { }
