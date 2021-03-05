import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app.grocery.html',
  styleUrls: [
      '../assets/css/bootstrap.min.css'
  ]


})

export class GroceryComponent {
  @Input() task?: string;
  tasks = Array();

  onClick(){
    this.tasks.push({name: this.task});
    this.task = '';
}


}