import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { filterClass } from '../custom-directive/custom.filter';

const appRoute: Routes = [
    {
        path: "", component: DashboardComponent
    }
]

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoute),
        filterClass
    ],
    exports: [RouterModule]
})
export class DashModule { }
