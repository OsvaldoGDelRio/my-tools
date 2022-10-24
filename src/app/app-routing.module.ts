import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqpageComponent } from './faqpage/faqpage.component';
import { HomeComponent } from './home/home.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'itemlist', component: ItemlistComponent },
  { path: 'faqpage', component: FaqpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
