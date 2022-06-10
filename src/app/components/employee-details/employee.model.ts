import { Department } from "./employee-department.model";

export class Employee {
  profileImg: string;
  name: string;
  gender: string;
  department: Department[];
  salary: number;
  startDate: string;

  constructor(
    profileImg: string,
    name: string,
    gender: string,
    department: Department[],
    salary: number,
    startDate: string
  ) {
    this.profileImg = profileImg;
    this.name = name;
    this.gender = gender;
    this.department = [];
    this.salary = salary;
    this.startDate = startDate;
  }
}
