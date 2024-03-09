import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterComponent } from './register/register.component'
import {MatTabsModule} from '@angular/material/tabs';
import { AdopterRegisterComponent } from './adopter-register/adopter-register.component';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';
import { VeterinaryDoctorRegisterComponent } from './veterinary-doctor-register/veterinary-doctor-register.component'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AdopterRegisterComponent,
    OrganizationRegisterComponent,
    VeterinaryDoctorRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AuthenticationModule { }
