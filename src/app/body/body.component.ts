import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact';
import { AppComponent } from '../app.component';
import { Contacts } from '../contacts';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  constructor(private contactService:ContactService){

  }
  contacts :Contact[]= this.contactService.getContacts()
   @Input()
   searchString!:string;
   @Output() 
   showContactButtonClicked=new EventEmitter();
   buttonClicked(contact: Contact){
      this.showContactButtonClicked.emit(contact);
   }

   
}
