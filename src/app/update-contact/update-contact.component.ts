import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../contact';
import { Contacts } from '../contacts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit{
  contact: Contact|undefined;
  constructor(
    private route: ActivatedRoute,
  ) { }
  name?:string;
  mobile?:string;
  @ViewChild('myForm') myForm: any;
  
  contacts=new Contacts().contacts
  
  ngOnInit() {
   
    const routeParams = this.route.snapshot.paramMap;
    const contactIdFromRoute = (routeParams.get('contactId'));
    
    this.contact = this.contacts.find(contact => contact.contactId === contactIdFromRoute);
    this.name=this.contact?.name;
    this.mobile=this.contact?.mobilenumber
    
}
}
