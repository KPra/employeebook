import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items = [];

  constructor() {
    this.items.push({name: 'apple', amount: 10});
    this.items.push({name: 'orange', amount: 20});
  }

  ngOnInit() {
  }

}
