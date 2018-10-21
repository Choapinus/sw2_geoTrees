import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { SendreportComponent } from './components/sendreport/sendreport.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'sendreport', component: SendreportComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
