import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversorPage } from './conversor.page';

const routes: Routes = [
  {
    path:       '',
    redirectTo: 'conversor',
    pathMatch:  'full'
  },

  {
    path: '',
    component: ConversorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConversorPageRoutingModule {}
