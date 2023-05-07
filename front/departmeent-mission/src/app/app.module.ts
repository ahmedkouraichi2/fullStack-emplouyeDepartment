import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouteMisisonComponent } from './ajoute-misison/ajoute-misison.component';
import { DepartementComponent } from './departement/departement.component';
import { DetailsComponent } from './details/details.component';
import { DeatilsEmployeeComponent } from './deatils-employee/deatils-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { MissionComponent } from './mission/mission.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { NewDepartementComponent } from './new-departement/new-departement.component';
import { DetalisEmployeeComponent } from './detalis-employee/detalis-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AjouteMisisonComponent,
    DepartementComponent,
    DetailsComponent,
    DeatilsEmployeeComponent,
    EmployeeComponent,
    MissionComponent,
    NewEmployeeComponent,
    NewDepartementComponent,
    DetalisEmployeeComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
