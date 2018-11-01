import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailCampaignComponent } from './detail-campaign/detail-campaign.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':slug',
    component: DetailCampaignComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
