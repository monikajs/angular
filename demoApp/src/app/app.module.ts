import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './shared/register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MatCardModule, MatButtonModule, MatTableModule, MatToolbarModule, MatDialogModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditDialogComponent } from './shared/edit-dialog/edit-dialog.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule, MatSelectModule, BrowserAnimationsModule, FlexLayoutModule,
    MatButtonModule, AppRoutingModule,
    RouterModule, FormsModule, MatInputModule, MatFormFieldModule,MatTableModule,MatToolbarModule,MatDialogModule,MatIconModule
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    ProductListComponent,
    ToolbarComponent,
    EditDialogComponent,
    RegisterUserComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [],
  entryComponents: [EditDialogComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/