import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes = [new RecipeItemComponent('name1', 'designation1', 'team1', 'DOJ1', 'assets/image1.jpg'),
    new RecipeItemComponent('name2', 'designation2', 'team2', 'DOJ2', 'assets/image1.jpg')];
  @Input() receivedRecipe: RecipeItemComponent;
  @Output() emitSelectedRecipeFromList = new EventEmitter();
  display: boolean;
  showDetails: boolean;
  constructor() { }

  ngOnInit() {
  }

  emitSelectedRecipe(data){
    console.log('received ' + data.recipe.name);
    this.emitSelectedRecipeFromList.emit(data);
  }
}
