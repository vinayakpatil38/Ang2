import { Injectable } from '@angular/core';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  Depts: Department[];

    constructor() {
        this.Depts = this.GetDepts();
    }

    // Method which retrieves or prepares Department data
    GetDepts(): Department[] {
        this.Depts = [
        { DepartmentId: 1, DeptName: "IT",  DeptLocation: "Hyderabad" },
        { DepartmentId: 2, DeptName: "CSE", DeptLocation: "Chennai" },
        { DepartmentId: 3, DeptName: "EEE", DeptLocation: "Mumbai" },
        { DepartmentId: 4, DeptName: "ECE", DeptLocation: "Delhi" },
      ];
        return this.Depts;
    }

    // Adding a new Department
    AddDepartment(Name: string, Location: string) {
        this.Depts.push({ DepartmentId: this.Depts.length + 1, DeptName: Name, DeptLocation: Location })
    }

    // Updated the existing Department
    UpdateDepartment(DeptId: number, Name: string, Location: string) {
        this.Depts.find(d => d.DepartmentId == DeptId).DeptLocation = Location;
        this.Depts.find(d => d.DepartmentId == DeptId).DeptName = Name;
    }

    DeleteDepartment(Index: number) {
        this.Depts.splice(Index, 1);
    }

    EditDepartment(DeptId: number) {
        return this.Depts.find(d => d.DepartmentId == DeptId);
    }
}
