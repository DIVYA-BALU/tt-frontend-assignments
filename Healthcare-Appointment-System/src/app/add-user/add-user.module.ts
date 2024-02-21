import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './add-user.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DropdownModule } from 'primeng/dropdown';
import { MatFormFieldModule } from '@angular/material/form-field';
const appRoute: Routes = [
    {
        path: "", component: UserComponent
    },
]

@NgModule({
    declarations: [UserComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoute),
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        DropdownModule
    ],
    exports: [RouterModule]
})
export class UserModule { }
