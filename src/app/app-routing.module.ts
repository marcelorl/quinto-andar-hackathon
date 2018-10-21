import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'criar-conta', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'procurar', canActivate: [AuthGuardService], loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'casa', loadChildren: './house/house.module#HousePageModule' },
  { path: 'proposa-enviada', loadChildren: './proposa-sent/proposa-sent.module#ProposaSentPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
