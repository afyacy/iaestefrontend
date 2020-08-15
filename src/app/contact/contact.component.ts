import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  msgForm: FormGroup;

  ngOnInit(): void {
    this.msgForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      msg: ['', Validators.required]
    });
  }

  onSubmit(){
    console.log(this.msgForm.value);
  }

}
