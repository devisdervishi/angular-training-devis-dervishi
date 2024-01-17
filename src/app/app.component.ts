import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  showContact(contact:Contact){
    alert("Name:"+contact.name+"\n"+"Phone:"+contact.mobilenumber)
  }
}
