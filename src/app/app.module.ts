import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { CardCampaignComponent } from './card-campaign/card-campaign.component';
import { DetailCampaignComponent } from './detail-campaign/detail-campaign.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { CampaignComponent } from './campaign/campaign.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardCampaignComponent,
    DetailCampaignComponent,
    LoaderComponent,
    LoginComponent,
    CampaignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
