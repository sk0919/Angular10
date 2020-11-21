import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "auth", loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule) },
  { path: "claims", loadChildren: () => import('./claims/claims.module').then(mod => mod.ClaimsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
