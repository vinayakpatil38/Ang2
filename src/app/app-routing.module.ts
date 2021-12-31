import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { DepartmentComponent } from './Components/department/department.component';
import { RegisterComponent } from './Components/register/register.component';
import { TlistComponent } from './Components/tlist/tlist.component';
import { Department } from './models/department';


const routes: Routes = [
  {path:'Home',component:RegisterComponent},
  {path:'Customer',component:CustomerComponent},
  {path:'Department',component:DepartmentComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Survey',component:TlistComponent},
  {path:'',component:RegisterComponent},
  {path:'**',component:RegisterComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
