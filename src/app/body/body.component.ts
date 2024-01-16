import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  contacts :Contact[]=[
    {"mobilenumber": "1234567890", "name": "John Doe", "isActive": true, "isFavorite": false, "isDeleted": false},
    {"mobilenumber": "9876543210", "name": "Jane Smith", "isActive": false, "isFavorite": true, "isDeleted": false},
    {"mobilenumber": "5551112233", "name": "Alice Johnson", "isActive": true, "isFavorite": false, "isDeleted": true},
    {"mobilenumber": "8887776666", "name": "Bob Williams", "isActive": false, "isFavorite": true, "isDeleted": false},
    {"mobilenumber": "3332221111", "name": "Eve Davis", "isActive": true, "isFavorite": false, "isDeleted": true},
    {"mobilenumber": "4445556666", "name": "Charlie Brown", "isActive": false, "isFavorite": true, "isDeleted": false},
    {"mobilenumber": "9998887777", "name": "Grace Taylor", "isActive": true, "isFavorite": false, "isDeleted": true},
    {"mobilenumber": "7776665555", "name": "Daniel White", "isActive": false, "isFavorite": true, "isDeleted": false},
    {"mobilenumber": "6665554444", "name": "Sophia Miller", "isActive": true, "isFavorite": false, "isDeleted": true},
    {"mobilenumber": "2223334444", "name": "Liam Anderson", "isActive": false, "isFavorite": true, "isDeleted": false},
    {"mobilenumber": "1112223333", "name": "Olivia Parker", "isActive": true, "isFavorite": true, "isDeleted": false},
    {"mobilenumber": "5554443333", "name": "Matthew Turner", "isActive": false, "isFavorite": false, "isDeleted": true},
    {"mobilenumber": "9990001111", "name": "Emma Harris", "isActive": true, "isFavorite": true, "isDeleted": false},
    {"mobilenumber": "4448887777", "name": "James Carter", "isActive": false, "isFavorite": false, "isDeleted": true},
    {"mobilenumber": "7773336666", "name": "Ava Rodriguez", "isActive": true, "isFavorite": true, "isDeleted": false}
   ]
   @Output() 
   showContactButtonClicked=new EventEmitter();
   buttonClicked(contact: Contact){
      this.showContactButtonClicked.emit(contact);
   }
}
