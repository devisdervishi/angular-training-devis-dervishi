import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})

export class AddContactComponent  {
  name!:string;
  mobile!:string;
  @ViewChild('myForm') myForm: any;
  

}
