import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { Validators } from "@angular/forms";
import { DemoAppService } from "src/app/shared/demo-app.service";
// import {AppServiceService} from '../app-service.service';
 export interface Data {
property: string;
value: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  // providers: [AppServiceService]
})
export class RegisterComponent implements OnInit {
 salutations: string[] = ["MR", "Ms"];
 data: Data[];
  constructor(private readonly fb: FormBuilder, private readonly router: Router, private readonly demoAppService:DemoAppService) { }
  registrationForm: FormGroup = this.fb.group({
    address: [''],
    email: ['',Validators.required],
    username: ['',Validators.required],
    number: ['',Validators.required],
    salutation: ['']
  })
  
  submitForm() {
    // console.log('ghuih',this.registrationForm.controls['salutation'].value);
const usernameUnique = localStorage.getItem(this.registrationForm.controls['username'].value);
console.log('uu',localStorage.getItem(this.registrationForm.controls['username'].value));
if(usernameUnique) {
  return;
} else {
localStorage.setItem(this.registrationForm.controls['username'].value,JSON.stringify(this.registrationForm.value));
console.log("ls",localStorage);
}

this.router.navigate(['pruduct-list']);
  }

  ngOnInit() {
    
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/