import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapComponent } from './components/map/map.component';
import { AppRoutingModule } from './app-routing.module';

// AGM
import { AgmCoreModule } from '@agm/core';
import { TreesService } from './services/trees.service';
import { SendreportComponent } from './components/sendreport/sendreport.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapComponent,
    SendreportComponent,
    ToolbarComponent,
    AlertsComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0f1JGCUziQ-AXZPASnZ3dq7krgUx_IuU'
    }),
    AppRoutingModule
  ],
  providers: [
    TreesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
