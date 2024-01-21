import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Contacts } from './contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { 
   
  }

  private contacts:Contact[]=Contacts.contacts;

  getContacts(){
    return this.contacts
  }
  getContactById(id:string){
   return this.contacts.find(contact => contact.contactId === id);
  }
}
