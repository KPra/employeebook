import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = [new RecipeItemComponent('name1', 'designation1', 'team1', 'DOJ1', 'assets/image1.jpg'),
    new RecipeItemComponent('name2', 'designation2', 'team2', 'DOJ2', 'assets/image1.jpg')];

  @Output() valueChange = new EventEmitter();
  @Output() valueClear = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fire(recipe) {
    console.log('fired ' + recipe.name);
    this.valueChange.emit(recipe);
  }

  fireClear() {
    console.log('fired value clear');
    this.valueClear.emit('clear');
  }
}
