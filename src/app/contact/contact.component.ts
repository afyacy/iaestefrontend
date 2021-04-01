import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from "../http.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  loading = false;
  buttionText = "Submit";
  response = "";
  user = <any>{};
  error = '';
  success = '';
        
  
  nameFormControl = new FormControl("", [
    Validators.required
  ]);
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  msgFormControl = new FormControl("", [
    Validators.required
  ]);
  

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              public http: HttpService){ }

  msgForm: FormGroup;

  ngOnInit(): void {
    this.msgForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      msg: ['', Validators.required]
    });

    console.log(this.http.test);
  }

  onSubmit(){
    this.loading = true;
    this.buttionText = "Submitting...";

    let user = {
      name: this.nameFormControl.value,
      email: this.emailFormControl.value,
      msg: this.msgFormControl.value
    }

    this.http.sendEmail(user).subscribe
    (res => {
      console.log(res);
      this.response = res;
    },
    err => {
      console.log(err);
    }
    );
    
    }//End submit function
  

}
