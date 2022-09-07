import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoModel } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo-app';
  itemList: TodoModel[] = this.getItemsLocalStorage();


  addItem(form: NgForm) {
    this.setItemLocalStorage(form.value);
    form.reset();
  }

  setItemLocalStorage(itemText: any) {
    this.itemList.push(itemText);
    localStorage.setItem("items", JSON.stringify(this.itemList));
  }

  getItemsLocalStorage() {
    if (localStorage.getItem("items") === null) {
      this.itemList = [];
    } else {
      this.itemList = JSON.parse(localStorage.getItem("items") || '[]');
    }
    console.log(this.itemList);
    return this.itemList;
  }

  deleteItemLocalStorage(todo: TodoModel) {
    if (confirm("Are you sure ?")) {
      let index = this.itemList.indexOf(todo);
      this.itemList.splice(index, 1);
      localStorage.setItem("items", JSON.stringify(this.itemList));
    }
  }

  deleteAllLocalStorage() {
    if (confirm("Are you sure ?")) {
      localStorage.clear();
      this.itemList = [];
    }
  }
}
