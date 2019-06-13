import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input()formData;
 salutations: string[] = ["MR", "Ms"];
  constructor(private readonly fb: FormBuilder, private readonly router: Router) { }
  registrationForm: FormGroup = this.fb.group({
    username: ['',Validators.required],
    address: [''],
    email: ['',[Validators.email,Validators.required]],
    number: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    salutation: ['']
  })
  
submitForm() {
const usernameUnique = localStorage.getItem(this.registrationForm.controls['username'].value);
if(usernameUnique) {
  if(this.formData){
    localStorage.setItem(JSON.parse(usernameUnique).username,JSON.stringify(this.registrationForm.value));
    this.registrationForm.controls['username'].disable;
  }
  return;
} else {
localStorage.setItem(this.registrationForm.controls['username'].value,JSON.stringify(this.registrationForm.value));
console.log("ls",localStorage);
}
this.router.navigate(['product-list']);
  }
  ngOnInit() {
    if(this.formData) {
    this.registrationForm.controls['username'].setValue(this.formData.username);
    this.registrationForm.controls['number'].setValue(this.formData.number);
    this.registrationForm.controls['salutation'].setValue(this.formData.salutation);
    this.registrationForm.controls['address'].setValue(this.formData.address);
    this.registrationForm.controls['email'].setValue(this.formData.email);
    }
  }
}