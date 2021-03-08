import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { DesignationComponent } from './designation/designation.component';
import { DepartmentComponent } from './department/department.component';
import { CreateCompanyComponent } from './company/create-company/create-company.component';
import { UpdateCompanyComponent } from './company/update-company/update-company.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';
import { CreateDesignationComponent } from './designation/create-designation/create-designation.component';
import { UpdateDepartmentComponent } from './department/update-department/update-department.component';
import { UpdateDesignationComponent } from './designation/update-designation/update-designation.component';

const routes: Routes = [
  {path: 'company', component: CompanyComponent, pathMatch: 'full'},
  {path: 'company/create', component: CreateCompanyComponent, pathMatch: 'full'},
  {path: 'company/update/:id', component: UpdateCompanyComponent, pathMatch: 'full'},
  {path: 'designation/create', component: CreateDesignationComponent, pathMatch: 'full'},
  {path: 'designation', component: DesignationComponent, pathMatch: 'full'},
  {path: 'designation/update/:id', component: UpdateDesignationComponent, pathMatch: 'full'},
  {path: 'department/create', component: CreateDepartmentComponent, pathMatch: 'full'},
  {path: 'department/update/:id', component: UpdateDepartmentComponent, pathMatch: 'full'},
  {path: 'department', component: DepartmentComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {
}
