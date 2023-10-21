import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

const routes: Routes = [
  { path : 'login', component:LoginComponent},
  { path : 'forgot-password', component:ForgotPasswordComponent},
  { path : '', redirectTo:'/login', pathMatch: 'full'},
  { path : 'admin',
   loadChildren:()=>
   import('./module/admin/admin.module').then((m) =>m.AdminModule)},
  { path : '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
