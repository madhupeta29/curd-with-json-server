import { Injectable } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
form:FormGroup =new FormGroup({
  $key : new FormControl(null),
  fullName :new FormControl(''),
  email: new FormControl(''),
  MobileNO:new FormControl(''),
  CITY:new FormControl(''),
  gender:new FormControl('1'),
department:new FormControl('0'),
hiredare:new FormControl(''),
isparmenent:new FormControl('false')

})



}
