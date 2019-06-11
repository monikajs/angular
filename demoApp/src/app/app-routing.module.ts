import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
  {
    path: '', component: RegisterComponent
  },
  {
    path: 'pruduct-list', component: ProductListComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
