import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactpageComponent } from './contactpage/contactpage.component';

import { FaqpageComponent } from './faqpage/faqpage.component';
import { HomeComponent } from './home/home.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { LocalbusinessComponent } from './localbusiness/localbusiness.component';

import { VideoobjectComponent } from './videoobject/videoobject.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'itemlist', component: ItemlistComponent },
  { path: 'faqpage', component: FaqpageComponent },
  { path: 'localbusiness', component: LocalbusinessComponent},
  { path: 'contactpage', component: ContactpageComponent },
  { path: 'videoobject', component: VideoobjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
