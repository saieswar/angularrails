import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SellerRegComponentComponent } from './seller-reg-component/seller-reg-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

//custom modules
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { routes } from './app.routes';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { EqualValidator } from './password-validation';

//serivces
import { SignupService } from './services/signup.service';
import { LoginService } from './services/login.service';
import { ConfigService } from './services/config.service';
import { SellerResolver } from './resolvers/seller.resolver';
import { AgentResolver } from './resolvers/agent.resolver';
import { BuyerResolver } from './resolvers/buyer.resolver';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { AgentService } from "./services/agent.service";
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';
import { SellerService } from "./services/seller.service";
import { SellerCreatePropComponent } from './seller-create-prop/seller-create-prop.component';
import { BuyerServiceService } from './services/buyer-service.service';

import { TypeaheadModule, ModalModule } from 'ngx-bootstrap';
import { SellerPropListComponent } from './seller-prop-list/seller-prop-list.component';
import { AgentSignupComponent } from './agent-signup/agent-signup.component';
import { AgentPropListComponent } from './agent-prop-list/agent-prop-list.component';
import { SellerBidsComponent } from './seller-bids/seller-bids.component';
import { SellerMyagentsComponent } from './seller-myagents/seller-myagents.component';
import { AgentMybidsComponent } from './agent-mybids/agent-mybids.component';

import { TagInputModule } from 'ngx-chips';
import { BuyerComponent } from './buyer/buyer.component';
import { BuyerdashboardComponent } from './buyerdashboard/buyerdashboard.component';
import { BuyerPropsComponent } from './buyer-props/buyer-props.component';
import { BuyerWonPropsComponent } from './buyer-won-props/buyer-won-props.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SellerRegComponentComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    LoginComponent,
    EqualValidator,
    SellerdashboardComponent,
    AgentdashboardComponent,
    SellerCreatePropComponent,
    SellerPropListComponent,
    AgentSignupComponent,
    AgentPropListComponent,
    SellerBidsComponent,
    SellerMyagentsComponent,
    AgentMybidsComponent,
    BuyerComponent,
    BuyerdashboardComponent,
    BuyerPropsComponent,
    BuyerWonPropsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    TagInputModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    ToastModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    SignupService,
    LoginService,
    ConfigService,
    SellerResolver,
    AgentResolver,
    BuyerResolver,
    SellerService,
    AgentService,
    BuyerServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
