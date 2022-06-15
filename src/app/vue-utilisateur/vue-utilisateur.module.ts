import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VueUtilisateurPageRoutingModule } from './vue-utilisateur-routing.module';

import { VueUtilisateurPage } from './vue-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VueUtilisateurPageRoutingModule
  ],
  declarations: [VueUtilisateurPage]
})
export class VueUtilisateurPageModule {}
