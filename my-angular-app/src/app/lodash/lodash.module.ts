import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LodashComponent } from './lodash.component';

const appRoute: Routes = [
    {
        path: "", component: LodashComponent
    }
]

@NgModule({
    declarations: [LodashComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoute),

    ],
    exports: [RouterModule]
})
export class LodashModule { }
