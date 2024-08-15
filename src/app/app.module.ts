import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component'; 
import { appRouting } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SellerAuthComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,  
    appRouting,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
