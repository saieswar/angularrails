import { Routes } from '@angular/router';
// import { NgModule } from '@angular/core';

import { SellerRegComponentComponent } from './seller-reg-component/seller-reg-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from "./login/login.component";
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { AgentdashboardComponent } from "./agentdashboard/agentdashboard.component";

export const routes: Routes = [
    { path: '', component: WelcomeComponent,
        children: [
            { path: 'seller_signup', component: SellerRegComponentComponent },
            { path: 'login', component: LoginComponent }
        ] 
    },
    { path:'seller-dashboard',component:SellerdashboardComponent },
    { path:'agent-dashboard',component:AgentdashboardComponent },
    { path: '**', component: PageNotFoundComponent }
];

