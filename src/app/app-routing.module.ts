import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ReportComponent } from './reports/report.component';
import { LoginComponent } from './login/login.component';
import { LoggedDataComponent } from './loggeddata/loggeddata.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'loggeddata', component: LoggedDataComponent},
    {path: 'report', component: ReportComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}