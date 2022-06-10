import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {

  // constructor(private FormBuilder: FormBuilder){}

  registrationForm = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    notes: new FormControl(null,[Validators.required]),
    selectSalary: new FormControl(null,[Validators.required]),
    selectDay: new FormControl(null,[Validators.required]),
    selectMonth: new FormControl(null,[Validators.required]),
    selectYear: new FormControl(null,[Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
