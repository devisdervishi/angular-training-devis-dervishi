import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { InsideViewComponent } from '../inside-view/inside-view.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})


export class ViewComponent {
  @Output() buttonClicked=new EventEmitter();

  appContainerButtonClicked(){
    this.buttonClicked.emit();
  }
}
