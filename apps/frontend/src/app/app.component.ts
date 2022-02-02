import { Component } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  
  todos: any = [{titile: 'Todo 1'}, {title: 'Todo 2'}];
  name='';

  addTodo(){
    this.todos.push({title: this.name});
    this.name = '';
  }
}
