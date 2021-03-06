import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'profil-utilisateur',
    loadChildren: () => import('./profil-utilisateur/profil-utilisateur.module').then( m => m.ProfilUtilisateurPageModule)
  },
  {
    path: 'vue-utilisateur',
    loadChildren: () => import('./vue-utilisateur/vue-utilisateur.module').then( m => m.VueUtilisateurPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
