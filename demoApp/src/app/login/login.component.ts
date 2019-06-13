import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup = this.fb.group({
username : ["",Validators.required],
password: ["",Validators.required]
}); 
hide=true;
  constructor(private readonly fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }
  login(){
this.router.navigate(['product-list']);
  }

}
