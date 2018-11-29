import { Component, OnInit } from '@angular/core';
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  receivedRecipe: RecipeItemComponent = null;
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  processEvent(recipe) {
    this.receivedRecipe = recipe;
    console.log('received : ' + recipe.name);
  }

  clearEvent(event) {
    console.log('clearEvent called!, and display is ' + this.display);
    // if (!this.display) {
    //   this.receivedRecipe = null;
    // }
    setTimeout(() => {
        if (!this.display) {
            this.receivedRecipe = null;
        }
    }, 2000);
  }

  showDetails() {
    console.log('show details called');
    this.display = true;
  }

  hideDetails() {
    console.log('hide details called');
    this.display = false;
    this.receivedRecipe = null;
  }
}
