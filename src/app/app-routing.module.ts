import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/frontend/frontend.module').then(m => m.FrontendModule)
  },
  {
    path: 'tester',
    loadChildren: () => import('./pages/software-tester/software-tester.module').then(m => m.SoftwareTesterModule)
  },
  {
    path: 'fullstack',
    loadChildren: () => import('./pages/fullstack/fullstack.module').then(m => m.FullstackModule)
  },
  {
    path: '6-exp',
    loadChildren: () => import('./pages/six-exp/six-exp.module').then(m => m.SixExpModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
