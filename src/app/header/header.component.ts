import {Component, Input, OnInit} from '@angular/core';
import {RecipeItemHolderComponent} from "../recipes/recipe-list/recipe-item/recipe-item-holder.component";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() dataReceivedHeader: any;
  message: Array<any> = [];
  count = 0;
  seenCount = 0;
  subscription: Subscription;

  public constructor(private myService: RecipeItemHolderComponent) {
    this.subscription = this.myService.getData().subscribe(message => {
      if (message.action === 'add') {
        console.log('adding '+this.seenCount);
          this.message.push(message.recipe);
          this.count++;
          this.seenCount++;
      } else {
        console.log('removing');
          const index = this.message.findIndex(data => data === message.recipe);
          this.message.splice(index, 1);
          this.count--;
          if (this.seenCount > 0) {
            this.seenCount--;
          }
      }
    });
  }

  ngOnInit() {
  }

  shouldWeShow() {
    if (this.seenCount === 0) {
      return false;
    }
    return true;
  }
}
