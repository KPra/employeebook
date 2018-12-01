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

  display: boolean = false;
  showDetails: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  fire() {
    console.log('fire called');
    this.showDetails = true;
  }

  fireClear() {
    console.log('fired value clear');
    setTimeout(() => {
      if (!this.display) {
        this.showDetails = false;
      }
    }, 2000);
  }

  displayDetails(){
    console.log('entered details pop up');
    this.display = true;
  }

  hideDetails(){
    console.log('left details pop up');
    this.display = false;
    this.showDetails = false;
  }
}
