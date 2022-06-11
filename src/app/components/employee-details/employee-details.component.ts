import { Component, OnInit } from '@angular/core';
import { Department } from './employee-department.model';
import { Employee } from './employee.model';
import { EmployeeHttpService } from '../../service/employee-http.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'gender',
    'department',
    'salary',
    'startDate',
    'actions',
  ];
  employeeDetails: Employee[] = [
    new Employee(
      'assets/images/flower.jpg',
      'Amit Dnyandeo Haral',
      'Male',
      [new Department('HR'), new Department('Engineer')],
      10000,
      '28 July 2022'
    ),
    new Employee(
      'assets/images/flower.jpg',
      'Amit Dnyandeo Haral',
      'Male',
      [new Department('HR')],
      10000,
      '28 July 2022'
    ),
  ];

  constructor(private employeeHttpService : EmployeeHttpService) {}

  ngOnInit(): void {
    this.getEmployeeDetails()
  }

  getEmployeeDetails(){
    this.employeeHttpService.getRequest('/employee').subscribe((data) => {
      console.log(data);
    });
  }
}
