import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'criar-conta', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'procurar', canActivate: [AuthGuardService], loadChildren: './tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
