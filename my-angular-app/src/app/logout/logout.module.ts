import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout.component';

const appRoute: Routes = [
    {
        path: "", component: LogoutComponent
    },
]

@NgModule({
    declarations: [LogoutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoute),
    ],
    exports: [RouterModule]
})
export class LogOutModule { }
