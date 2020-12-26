import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ProfileModule } from '../profile/profile.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';


@NgModule({
  declarations: [LoginComponent, RegistrationComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ProfileModule
  ]
})
export class AuthModule { }
