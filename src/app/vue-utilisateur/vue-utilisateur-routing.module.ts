import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VueUtilisateurPage } from './vue-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: VueUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VueUtilisateurPageRoutingModule {}
