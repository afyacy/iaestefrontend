import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SendEmail } from '../send-email';
import { SendEmailService } from '../send-email.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  sendEmail: SendEmail[];
  email: any;
  error = '';
  success = '';
  

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private sendEmailService: SendEmailService) { }

  msgForm: FormGroup;

  ngOnInit(): void {
    this.msgForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      msg: ['', Validators.required]
    });
  }

  onSubmit(){
    this.error = '';
    this.success = '';

    this.sendEmailService.sendEmail(this.sendEmail)
      .subscribe(
        (res: SendEmail[]) => {
          // Update the list of cars
          this.sendEmail = res;

          // Inform the user
          this.success = 'Created successfully';

          // Reset the form
          //msgForm.reset();
        },
        (err) => this.error = err
      );
    }//End submit function
  

}
