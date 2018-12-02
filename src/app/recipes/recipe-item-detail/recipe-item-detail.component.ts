import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeItemComponent} from "../recipe-list/recipe-item/recipe-item.component";

@Component({
  selector: 'app-recipe-item-detail',
  templateUrl: './recipe-item-detail.component.html',
  styleUrls: ['./recipe-item-detail.component.css']
})
export class RecipeItemDetailComponent implements OnInit {
  @Input() receivedRecipe: RecipeItemComponent;
  @Output() emitSelectedRecipe = new EventEmitter();
  constructor() { }
  color = '';
  ngOnInit() {
  }

  toggleColor() {
    console.log('toggle color bell icon');
    if (this.color === 'warn') {
      console.log('removing from tracklist');
      this.color = '';
      this.emitSelectedRecipe.emit({'recipe': this.receivedRecipe, 'action': 'remove'});
    } else {
      console.log('adding to tracklist');
      this.color = 'warn';
      this.emitSelectedRecipe.emit({'recipe': this.receivedRecipe, 'action': 'add'});
    }
  }
}
