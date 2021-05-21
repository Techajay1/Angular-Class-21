import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  titleVal = 'Contact Form';
  constructor() { }

  ngOnInit(): void {
  }
  firstNameValue(firstName: NgModel): void {
    console.log(firstName);
  }
  contactFormSubmit(contactForm: NgForm): void {
    console.log(contactForm);
  }

}
