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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routes } from './app.routes';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { EqualValidator } from './password-validation';

//serivces
import { SignupService } from './services/signup.service';
import { LoginService } from './services/login.service';
import { ConfigService } from './services/config.service';
import { SellerResolver } from './resolvers/seller.resolver';
import { SellerdashboardComponent } from './sellerdashboard/sellerdashboard.component';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';
import { SellerService } from "./services/seller.service";


@NgModule({
  declarations: [
    AppComponent,
    SellerRegComponentComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    LoginComponent,
    EqualValidator,
    SellerdashboardComponent,
    AgentdashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ToastModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    SignupService,
    LoginService,
    ConfigService,
    SellerResolver,
    SellerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
