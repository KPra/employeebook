import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() receivedRecipe: RecipeItemComponent;
  @Output() emitSelectedRecipeFromList = new EventEmitter();
  display: boolean;
  showDetails: boolean;
  selectedStatus: boolean;
  popoverDisabled = false;
  position = new FormControl('after');
  constructor() { }

  ngOnInit() {
  }

  emitSelectedRecipe(data){
    console.log('received ' + data.recipe.name);
    this.emitSelectedRecipeFromList.emit(data);
  }

  divSelected(selectedStatus) {
    this.selectedStatus = selectedStatus;
  }

  disableCardAndDisplayDetails() {
    if (this.showDetails === true) {
      console.log('show Details true');
      this.showDetails = false;
      this.popoverDisabled = true;
    } else {
      console.log('show Details false');
      this.showDetails = true;
      this.popoverDisabled = false;
    }
    return this.showDetails;
  }
}
