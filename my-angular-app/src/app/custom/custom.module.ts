import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomComponent } from './custom.component';
import { filterClass } from "../custom-folder/custom.filter";

const appRoute: Routes = [
    {
        path: "", component: CustomComponent
    }
]

@NgModule({
    declarations: [CustomComponent],
    exports: [RouterModule],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoute),
        filterClass
    ]
})
export class CustomModule { }
