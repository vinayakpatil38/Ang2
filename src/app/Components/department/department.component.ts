import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentsService } from 'src/app/Services/departments.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {

  _depts: Department[];
  EditDeptName: string = '';
  EditDeptLocation: string = '';
  EditDeptId: number = 0;
  EditDept: boolean = false;

  constructor(private depts: DepartmentsService) {
      this._depts = depts.GetDepts();
  }
  AddDepartment(DeptId: string, Name: string, Location: string) {
      if (parseInt(DeptId) == 0)
          this.depts.AddDepartment(Name, Location);
      else
          this.depts.UpdateDepartment(parseInt(DeptId), Name, Location);
      this.EditDept = false;
  }

  DeleteDepartment(Index: number) {
      this.depts.DeleteDepartment(Index);
  }

  EditDepartment(DeptId: number) {
      this.EditDept = true;
      this.EditDeptId = this.depts.EditDepartment(DeptId).DepartmentId;
      this.EditDeptName = this.depts.EditDepartment(DeptId).DeptName;
      this.EditDeptLocation = this.depts.EditDepartment(DeptId).DeptLocation;
  }



}
