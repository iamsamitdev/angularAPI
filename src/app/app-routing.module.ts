import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full', canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'home',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'create-employee',component:EmployeeCreateComponent, canActivate:[AuthGuard]},
  {path:'employee-edit/:id',component:EmployeeUpdateComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
