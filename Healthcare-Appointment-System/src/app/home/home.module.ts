import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { MatDialogModule } from '@angular/material/dialog';

const appRoute: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'login',
        loadChildren: () =>
            import('../login/login.module').then((d) => d.LoginModule)
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(appRoute),
        FormsModule,
        MatDialogModule
    ],
    exports: [RouterModule]
})
export class HomeModule { }
