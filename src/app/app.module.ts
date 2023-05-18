import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFormComponent } from './upload-form/upload-form.component';

//Modulo para Auth0
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-a4a7wtab7404ynai.us.auth0.com', //TODO: PONER EN ENV
      clientId: 'YKIaC4NfOmPOfLi2iiGhGywsyaaC8eo0',//TODO: PONER EN ENV
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
