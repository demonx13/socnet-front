import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VerifyComponent } from './verify/verify.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthLayoutComponent,
    LoginLayoutComponent,
    VerifyComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
