import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DoctorComponent } from './doctor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { datePipe } from '../pipe/date.pipe';
import { SearchComponent } from '../search/search.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { CanCreateDirective } from '../custom-directives/can-create.directive';
import { CanBookDirective } from '../custom-directives/can-book.directive';


const appRoute: Routes = [
    {
        path: "", component: DoctorComponent,
        children:
            []
    },
]

@NgModule({
    declarations: [DoctorComponent, SearchComponent, CanBookDirective],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoute),
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        datePipe,
        MatFormFieldModule
    ],
    exports: [RouterModule]
})
export class DoctorModule { }
