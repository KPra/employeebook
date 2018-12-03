import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {PopoverModule} from 'ngx-popover';
import {RecipeItemHolderComponent} from "./recipe-list/recipe-item/recipe-item-holder.component";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes = [new RecipeItemComponent('name1', 'designation1', 'team1', 'DOJ1', 'assets/image1.jpg'),
    new RecipeItemComponent('name2', 'designation2', 'team2', 'DOJ2', 'assets/image1.jpg')];
  /*@Output() emitSelectedRecipeFromRecipes = new EventEmitter();*/
  public dataReceived: any;


  constructor(private myService: RecipeItemHolderComponent) {
  }

  ngOnInit() {
  }

  emitSelectedRecipe(data) {
    console.log('received in recipes component ts');
    this.dataReceived = data;
    this.myService.myMethod(this.dataReceived);
    /*this.emitSelectedRecipeFromRecipes.emit(data);*/
  }

}
