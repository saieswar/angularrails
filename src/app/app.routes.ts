import { Routes } from '@angular/router';
// import { NgModule } from '@angular/core';

import { SellerRegComponentComponent } from './seller-reg-component/seller-reg-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from "./login/login.component";
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { AgentdashboardComponent } from "./agentdashboard/agentdashboard.component";
import { SellerResolver } from './resolvers/seller.resolver';

import { SellerCreatePropComponent } from './seller-create-prop/seller-create-prop.component';
import { SellerPropListComponent } from './seller-prop-list/seller-prop-list.component';

export const routes: Routes = [
    { path: '', 
      component: WelcomeComponent,
      children: [
         { path: 'seller_signup', component: SellerRegComponentComponent },
         { path: 'login', component: LoginComponent }
      ] 
    },
    { path:'seller',
      component:SellerdashboardComponent,
      resolve:{
        properties:SellerResolver
      },
      children:[
        { path:'create_prop',component:SellerCreatePropComponent },
        { path:'prop_list',component:SellerPropListComponent},
        { path:'prop_edit/:id',component:SellerCreatePropComponent }
      ] 
    },
    { path:'agent-dashboard',component:AgentdashboardComponent },
    { path: '**', component: PageNotFoundComponent }
];

