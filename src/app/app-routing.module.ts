import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'criar-conta', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'imovel/:id', loadChildren: './house/house.module#HousePageModule' },
  { path: 'proposta-enviada', loadChildren: './proposa-sent/proposa-sent.module#ProposaSentPageModule' },
  { path: 'proposta/:id', loadChildren: './proposal/proposal.module#ProposalPageModule' },
  { path: 'procurar', loadChildren: './search/search.module#SearchPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
