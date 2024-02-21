import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { AuthGuard } from '../guards/auth.guard';

const appRoute: Routes = [
    {
        path: "", component: AboutComponent,
    }
]

@NgModule({
    declarations: [AboutComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoute),
    ],
    exports: [RouterModule]
})
export class AboutModule { }
