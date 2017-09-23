import { Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { LoginComponent } from "./login/login.component";


export const routes: Routes = [
    {path: 'MainPage', component: MainPageComponent},
    {path: 'Login', component: LoginComponent}
]