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


@NgModule({
  declarations: [
    AppComponent,
    SellerRegComponentComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    LoginComponent,
    EqualValidator
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [SignupService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
