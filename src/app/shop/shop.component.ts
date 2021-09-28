import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee-dashboard.modal';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  

  employeeModalobj : EmployeeModel = new EmployeeModel();
  employeeData!:any;
  formValue!:FormGroup;
  showAdd!:boolean;
  showUpdate!:boolean;

  constructor( private formbuilder:FormBuilder,

    private api:ApiService) { }

  ngOnInit():void{
    this.formValue = this.formbuilder.group({

     firstName :[''],
      lastName :[''],
      email  : [''],
      mobile : [''],
      salary : [''],
    })
    this.getAllemployee();
  }
 clickAddEmploye(){
   this.formValue.reset();
   this.showAdd=true;
   this.showUpdate=false;
 }
  postEmployeeDetails(){
    this.employeeModalobj.firstName = this.formValue.value.firstName;
    this.employeeModalobj.lastName = this.formValue.value.lastName;
    this.employeeModalobj.email = this.formValue.value.email;
    this.employeeModalobj.mobile = this.formValue.value.mobile;
    this.employeeModalobj.salary = this.formValue.value.salary;
  
    this.api.postEmploye(this.employeeModalobj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee added sucessfully")
      let ref = document.getElementById('cancel')
      ref.click();
      this.formValue.reset(); 
      this.getAllemployee();
    },
    err=>{
      alert("something wentwrong")
    }
    
    )

}

getAllemployee(){
  this.api.getEmployee().subscribe(res=>{
    this.employeeData = res;
  })
}
deleteEmployee(row:any){
  this.api.deleteEmployee(row.id).subscribe(res=>{
    alert("emplyee deleted")
    this.getAllemployee();
  })


}
onEdit(row:any){
  this.showAdd=false;
   this.showUpdate=true;
  this.employeeModalobj.id=row.id;
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['lastName'].setValue(row.lastName)
  this.formValue.controls['email'].setValue(row.email)
  this.formValue.controls['mobile'].setValue(row.mobile)
  this.formValue.controls['salary'].setValue(row.salary)
}

updateEmployeeDetails(){
  this.employeeModalobj.firstName = this.formValue.value.firstName;
    this.employeeModalobj.lastName = this.formValue.value.lastName;
    this.employeeModalobj.email = this.formValue.value.email;
    this.employeeModalobj.mobile = this.formValue.value.mobile;
    this.employeeModalobj.salary = this.formValue.value.salary;
    this.api.updateEmployee(this.employeeModalobj,this.employeeModalobj.id)
    .subscribe(res=>{
      alert("updatesuccessfully");
      let ref = document.getElementById('cancel')
      ref.click();
      this.formValue.reset(); 
      this.getAllemployee();
    })
}
}
