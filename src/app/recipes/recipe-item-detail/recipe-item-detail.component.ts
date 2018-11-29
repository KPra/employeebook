import {Component, Input, OnInit} from '@angular/core';
import {RecipeItemComponent} from "../recipe-list/recipe-item/recipe-item.component";

@Component({
  selector: 'app-recipe-item-detail',
  templateUrl: './recipe-item-detail.component.html',
  styleUrls: ['./recipe-item-detail.component.css']
})
export class RecipeItemDetailComponent implements OnInit {
  @Input() receivedRecipe: RecipeItemComponent;
  constructor() { }

  ngOnInit() {
  }
}
