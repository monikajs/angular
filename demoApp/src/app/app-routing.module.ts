import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from "./shared/register/register.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { RegisterUserComponent } from "src/app/register-user/register-user.component";
import { LoginComponent } from "src/app/login/login.component";

const routes: Routes = [
  {path: '', component:LoginComponent},
  {
    path: 'product-list', component: ProductListComponent
  },
  {
    path: 'register-form',component: RegisterUserComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
