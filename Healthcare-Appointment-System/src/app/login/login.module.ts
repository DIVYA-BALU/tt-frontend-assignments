import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
const appRoute: Routes = [
    {
        path: "", component: LoginComponent,
    },
    {
        path: 'dashboard', component: DashboardComponent
    }
]

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoute),
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
    exports: [RouterModule]
})
export class LoginModule { }
