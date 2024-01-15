import { Component, EventEmitter, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-inside-view',
  templateUrl: './inside-view.component.html',
  styleUrls: ['./inside-view.component.scss']
})
export class InsideViewComponent {
@Output() buttonClicked=new EventEmitter();
}
