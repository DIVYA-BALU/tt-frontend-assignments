import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

const appRoute: Routes = [
    {
        path: "", component: RegisterComponent
    },
]

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoute),
        FormsModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
    exports: [RouterModule]
})
export class RegisterModule { }
