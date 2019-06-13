import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface dialogData {
    address: string,
    email: string,
    username: string,
    number: string,
    salutation: string
}
@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {
  registrationForm: FormGroup = this.fb.group({
    address: [''],
    email: ['',[Validators.email,Validators.required]],
    username: ['',Validators.required],
    number: ['',Validators.required],
    salutation: ['']
  })
  constructor(private readonly fb: FormBuilder,public dialogRef: MatDialogRef<EditDialogComponent> 
    ,@Inject(MAT_DIALOG_DATA)public data:dialogData){}

  ngOnInit() {
    
  }

}
