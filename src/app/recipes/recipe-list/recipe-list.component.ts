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
  @Output() emitShowDetails = new EventEmitter();
  display: boolean;
  @Input() showDetails = true;
  selectedStatus: boolean;
  popoverDisabled = false;
  isEmitting = false;
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
    if (this.popoverDisabled === false) {
      console.log('popoverDisabled true');
      this.popoverDisabled = true;
      this.isEmitting = true;
      this.emitShowDetails.emit('show');
    }
    // else {
    //   console.log('popoverDisabled false');
    //   this.popoverDisabled = false;
    // }
  }
}
