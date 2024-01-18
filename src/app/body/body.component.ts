import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../contact';
import { AppComponent } from '../app.component';
import { Contacts } from '../contacts';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  contacts :Contact[]=new Contacts().contacts
   @Input()
   searchString!:string;
   @Output() 
   showContactButtonClicked=new EventEmitter();
   buttonClicked(contact: Contact){
      this.showContactButtonClicked.emit(contact);
   }

   
}
