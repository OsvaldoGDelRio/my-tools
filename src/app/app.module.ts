import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ClipboardModule } from 'ngx-clipboard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { FaqpageComponent } from './faqpage/faqpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LocalbusinessComponent } from './localbusiness/localbusiness.component';
import { VideoobjectComponent } from './videoobject/videoobject.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ScrapingComponent } from './scraping/scraping.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemlistComponent,
    FaqpageComponent,
    HomeComponent,
    LocalbusinessComponent,
    VideoobjectComponent,
    ContactpageComponent,
    ScrapingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
