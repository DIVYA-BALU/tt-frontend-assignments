import { NgModule } from "@angular/core";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { Routes ,RouterModule} from "@angular/router";
import { DisplayApiComponent } from "./display-api/display-api.component";



const routes: Routes = [
    { path: '',component: DisplayApiComponent},
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }