import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Contact } from '../contact';
import { Contacts } from '../contacts';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createStartsWithUpperCase } from '../validations/startsWithUpperCase.validator';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit{
  contact: Contact|undefined;
  constructor(
    private route: ActivatedRoute,
    private contactService:ContactService,
    private fb:FormBuilder
  ) { }
  form!:FormGroup
  name?:string;
  mobile?:string;
  isActive?:boolean
  isFavorite?:boolean
  isDeleted?:boolean
  
  
  
  contacts= this.contactService.getContacts()
  
  ngOnInit() {
   
    const routeParams = this.route.snapshot.paramMap;
    const contactIdFromRoute = (routeParams.get('contactId'))+'';
    
    this.contact = this.contactService.getContactById(contactIdFromRoute);
    this.name=this.contact?.name;
    this.mobile=this.contact?.mobilenumber
    this.isActive=this.contact?.isActive
    this.isFavorite=this.contact?.isFavorite
    this.isDeleted=this.contact?.isDeleted

    this.form=this.fb.group(
      {
        name:[this.name,{validators:[Validators.required,Validators.minLength(2),createStartsWithUpperCase()],
        updateOn:'blur'}],
        mobile:[this.mobile,[Validators.required,Validators.minLength(8)]],
        isFavorite:[this.isFavorite],
        isActive:[this.isActive],
        isDeleted:[this.isDeleted]
      }
    )
}

get contactName(){
  return this.form.controls['name']
}
get contactMobile(){
  return this.form.controls['mobile']
}
}
