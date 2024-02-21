import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import sweetalert2 from 'sweetalert2';
const appRoute: Routes = [
    {
        path: "", component: ProfileComponent
    },
]

@NgModule({
    declarations: [ProfileComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoute),
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ],
    exports: [RouterModule]
})
export class ProfileModule { }
