import { Component, OnInit } from '@angular/core';
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes = [new RecipeItemComponent('name1', 'designation1', 'team1', 'DOJ1', 'assets/image1.jpg'),
    new RecipeItemComponent('name2', 'designation2', 'team2', 'DOJ2', 'assets/image1.jpg')];
  clearAll:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  invokeClearAll(clear) {
    console.log('invokeClearAll inside parent called!');
    this.clearAll = clear;
  }
}
