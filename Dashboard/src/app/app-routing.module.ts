import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'sidebar', component:SidebarComponent,canActivate:[AuthGuard]},
  {path:'forgotpass', component:ForgotpassComponent},
  {path:'**', redirectTo: '/notfound', pathMatch:'full'},
  {path:'notfound', component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
