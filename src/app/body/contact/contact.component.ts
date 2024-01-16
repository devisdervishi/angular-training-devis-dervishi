import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
 
  @Input('contactDisplayed')
  contact!:Contact;

  comment!:string;

 @Output()
 buttonClicked=new EventEmitter();
}
