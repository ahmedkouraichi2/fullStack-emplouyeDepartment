import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement/departement.component';
import { DetailsComponent } from './details/details.component';
import { EmployeeComponent } from './employee/employee.component';
import { MissionComponent } from './mission/mission.component';
import { AjouteMisisonComponent } from './ajoute-misison/ajoute-misison.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { DetalisEmployeeComponent } from './detalis-employee/detalis-employee.component';
import { NewDepartementComponent } from './new-departement/new-departement.component';

const routes: Routes = [

  {path : "departement" ,component : DepartementComponent},
  {path : "ajouterDepartement" ,component : NewDepartementComponent},
  {path : "details/:id" ,component : DetailsComponent},
  {path : "detailsemp/:id" ,component : DetalisEmployeeComponent},
  {path : "ajouteremployee" ,component : NewEmployeeComponent},
  {path : "listeEmployee" ,component : EmployeeComponent},
  {path : "ListMission" ,component : MissionComponent},
  //AjoutMission
  {path : "" ,component : AjouteMisisonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
