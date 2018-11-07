import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CampaignComponent } from './campaign/campaign.component';
import { DetailCampaignComponent } from './detail-campaign/detail-campaign.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'campaign',
    component: CampaignComponent
  },
  {
    path: 'masuk',
    component: LoginComponent
  },
  {
    path: 'daftar',
    component: RegisterComponent
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
