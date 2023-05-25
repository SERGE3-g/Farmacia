import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home1/home.component';
import { NavbarComponent } from './navbar1/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{path: 'home',component:HomeComponent},
{path: 'navbar',component:NavbarComponent},
{path: 'sidebar',component:SidebarComponent},
{path: 'dashboard',component:DashboardComponent},
{path: '', },
{path: '', },
{path: '', },
{path: '', },
{path: '', },
{path: '', },
{path: '', },
{path: '', },
{path: '', },
{path: '', },
{path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
