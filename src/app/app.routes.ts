import { Routes } from '@angular/router';
// import { NgModule } from '@angular/core';

import { SellerRegComponentComponent } from './seller-reg-component/seller-reg-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from "./login/login.component";

import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { SellerResolver } from './resolvers/seller.resolver';
import { SellerCreatePropComponent } from './seller-create-prop/seller-create-prop.component';
import { SellerPropListComponent } from './seller-prop-list/seller-prop-list.component';
import { SellerBidsComponent } from './seller-bids/seller-bids.component';
import { SellerMyagentsComponent } from './seller-myagents/seller-myagents.component';

import { AgentdashboardComponent } from "./agentdashboard/agentdashboard.component";
import { AgentSignupComponent } from './agent-signup/agent-signup.component';
import { AgentResolver } from './resolvers/agent.resolver';
import { BuyerResolver } from './resolvers/buyer.resolver';
import { AgentPropListComponent } from './agent-prop-list/agent-prop-list.component';
import { AgentMybidsComponent } from './agent-mybids/agent-mybids.component';
import { BuyerComponent } from './buyer/buyer.component';
import { BuyerdashboardComponent } from './buyerdashboard/buyerdashboard.component';
import { BuyerPropsComponent } from './buyer-props/buyer-props.component';
import { BuyerWonPropsComponent } from './buyer-won-props/buyer-won-props.component';

export const routes: Routes = [
    { path: '', 
      component: WelcomeComponent,
      children: [
         { path:'', redirectTo:'/login', pathMatch:'full' },
         { path: 'seller_signup', component: SellerRegComponentComponent },
         { path:'agent_signup',component:AgentSignupComponent },
         { path:'buyer_signup',component:BuyerComponent },
         { path: 'login', component: LoginComponent }
      ] 
    },
    { path:'seller',
      component:SellerdashboardComponent,
      resolve:{
        properties:SellerResolver
      },
      children:[
        { path:'',redirectTo:'/seller/prop_list' ,pathMatch:'full'},
        { path:'create_prop',component:SellerCreatePropComponent },
        { path:'prop_list',component:SellerPropListComponent },
        { path:'prop_edit/:id',component:SellerCreatePropComponent },
        { path:'bids_list/:id',component:SellerBidsComponent },
        { path:'my_agents',component:SellerMyagentsComponent }
      ] 
    },
    { path:'agent',
      component:AgentdashboardComponent,
      resolve:{
        properties:AgentResolver
      },
      children:[
        { path:'', redirectTo:'/agent/prop_list',pathMatch:'full' },
        { path:'prop_list',component:AgentPropListComponent },
        { path:'mybids',component:AgentMybidsComponent }
      ]
    },
    { path:'buyer',component:BuyerdashboardComponent,
      resolve:{
        properties:BuyerResolver
      },
      children:[
        { path:'',redirectTo:'/buyer/props',pathMatch:'full' },
        { path:'props',component:BuyerPropsComponent },
        { path:'won-props',component:BuyerWonPropsComponent }
      ]
    }, 
    { path: '**', component: PageNotFoundComponent }
];

