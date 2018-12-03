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
  recipes = [new RecipeItemComponent('James', 'Cloud Designer', 'Cloud DevOps', '10/05/2015', 'assets/image1.png'),
    new RecipeItemComponent('Harry', 'DB Developer', 'Release Management', '12/04/2017', 'assets/image1.png'),
    new RecipeItemComponent('Lily', 'Java Developer', 'Release Management', '03/08/2016', 'assets/image11.jpg'),
    new RecipeItemComponent('Snape', 'UI Developer', 'FrontEnd', '07/03/2014', 'assets/image1.png'),
    new RecipeItemComponent('Ron', 'Backend Developer', 'Middleware', '20/10/2012', 'assets/image1.png')];
  recipesCopy = [new RecipeItemComponent('James', 'Cloud Designer', 'Cloud DevOps', '10/05/2015', 'assets/image1.png'),
    new RecipeItemComponent('Harry', 'DB Developer', 'Release Management', '12/04/2017', 'assets/image1.png'),
    new RecipeItemComponent('Lily', 'Java Developer', 'Release Management', '03/08/2016', 'assets/image11.jpg'),
    new RecipeItemComponent('Snape', 'UI Developer', 'FrontEnd', '07/03/2014', 'assets/image1.png'),
    new RecipeItemComponent('Ron', 'Backend Developer', 'Middleware', '20/10/2012', 'assets/image1.png')];
  /*@Output() emitSelectedRecipeFromRecipes = new EventEmitter();*/
  public dataReceived: any;
  public searchTerm: string;

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

  search(): void {
    let term = this.searchTerm;
    this.recipes = this.recipesCopy.filter(function(tag) {
      return tag.name.indexOf(term) >= 0;
    });
  }

}
