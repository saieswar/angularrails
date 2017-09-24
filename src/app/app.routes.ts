import { Routes } from '@angular/router';
// import { NgModule } from '@angular/core';

import { SellerRegComponentComponent } from './seller-reg-component/seller-reg-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
    { path: '', component: WelcomeComponent,
        children: [
            { path: 'seller_signup', component: SellerRegComponentComponent },
            { path: 'login', component: LoginComponent }
        ] 
    },
    { path: '**', component: PageNotFoundComponent }
];

