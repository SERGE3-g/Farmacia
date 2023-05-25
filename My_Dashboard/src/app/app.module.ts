import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar1/navbar.component';
import { HomeComponent } from './home1/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarRow, } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { MatCardModule, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule} from '@angular/material/button';
import { MatList, MatListItem, MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    ProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
   
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
