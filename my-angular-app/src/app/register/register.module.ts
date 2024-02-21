import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';

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
        FormsModule
    ],
    exports: [RouterModule]
})
export class RegisterModule { }
