import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing-module';
import { LoginComponent } from './login/login-component';

//prime ng imports
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
//prime ng modules
const primengModulesAndImports = [InputTextModule, PasswordModule, ButtonModule, CardModule];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...primengModulesAndImports,
  ],
  exports: [LoginComponent],
})
export class AuthModule {}
