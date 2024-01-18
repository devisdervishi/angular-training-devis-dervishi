import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact';

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {

  transform(value: Contact[], search:string): any {
    
if(typeof search === 'undefined'){
  
  return value;
}
else{
  
    let filteredArray = value.filter(function(item) {
      return item.name.toLowerCase().includes(search.toLowerCase());
  });
  
  return filteredArray;
}
}
}
