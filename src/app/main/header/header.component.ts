import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
   search!:string;

   @Output()searchString=new EventEmitter();

   passSearchString(){
    
    this.searchString.emit(this.search)
   }
}