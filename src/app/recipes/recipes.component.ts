import { SIORating } from './../dashboard/siorating';
import { LeaveRating } from './../dashboard/leaverating';
import { EmailRating } from './../dashboard/emailrating';
import { Idletimerating } from './../dashboard/idletimerating';

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {PopoverModule} from 'ngx-popover';
import {RecipeItemHolderComponent} from "./recipe-list/recipe-item/recipe-item-holder.component";
import {FormControl} from "@angular/forms";
import {Jobsearchrating} from "../dashboard/jobsearchrating";
import {Entertainment} from "../dashboard/entertainment";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes = [new RecipeItemComponent('James', 'Cloud Designer', 'Cloud DevOps', '10/05/2015', 'assets/image1.png', false,
  8, 8, 8, false, 8, [new EmailRating(1, '20/11/2018'),
  new EmailRating(0.5, '22/11/2018'), new EmailRating(0.2, '23/11/2018'), new EmailRating(0.2, '26/11/2018'),
  new EmailRating(0, '27/11/2018')], 3, [new LeaveRating(0, '20/11/2018'), new LeaveRating(0, '21/11/2018'),
  new LeaveRating(1, '22/11/2018'), new LeaveRating(1, '23/11/2018'), new LeaveRating(0, '26/11/2018'),
  new LeaveRating(1, '27/11/2018'), new LeaveRating(0, '28/11/2018'), new LeaveRating(0, '29/11/2018'),
  new LeaveRating(1, '30/11/2018'), new LeaveRating(0, '1/12/2018'), new LeaveRating(0, '2/12/2018')], 6.9, [
    new SIORating(8, '20/11/2018'), new SIORating(8, '21/11/2018'), new SIORating(7, '22/11/2018'), new SIORating(8, '23/11/2018'),
    new SIORating(6, '26/11/2018'), new SIORating(6, '27/11/2018'), new SIORating(6, '28/11/2018'), new SIORating(7, '29/11/2018'),
    new SIORating(5, '30/11/2018'), new SIORating(5, '1/12/2018'), new SIORating(5, '2/12/2018')
  ], 7, [new Idletimerating(0, '20/11/2018'), new Idletimerating(0, '21/11/2018'), new Idletimerating(2, '22/11/2018'), new Idletimerating(1, '23/11/2018'),
      new Idletimerating(0, '26/11/2018'), new Idletimerating(2, '27/11/2018'), new Idletimerating(0, '28/11/2018'), new Idletimerating(0, '29/11/2018'),
      new Idletimerating(3, '30/11/2018'), new Idletimerating(0, '1/12/2018'), new Idletimerating(0, '2/12/2018')],
    5, [new Jobsearchrating(0, '20/11/2018'), new Jobsearchrating(0, '21/11/2018'), new Jobsearchrating(3, '22/11/2018'), new Jobsearchrating(2, '23/11/2018'),
      new Jobsearchrating(0, '26/11/2018'), new Jobsearchrating(4, '27/11/2018'), new Jobsearchrating(0, '28/11/2018'), new Jobsearchrating(0, '29/11/2018'),
      new Jobsearchrating(3, '30/11/2018'), new Jobsearchrating(0, '1/12/2018'), new Jobsearchrating(0, '2/12/2018')],
    [new Entertainment(0, '20/11/2018'), new Entertainment(0, '21/11/2018'), new Entertainment(3, '22/11/2018'), new Entertainment(3, '23/11/2018'),
      new Entertainment(0, '26/11/2018'), new Entertainment(1, '27/11/2018'), new Entertainment(0, '28/11/2018'), new Entertainment(0, '29/11/2018'),
      new Entertainment(2, '30/11/2018'), new Entertainment(0, '1/12/2018'), new Entertainment(0, '2/12/2018')], []),
    new RecipeItemComponent('Harry', 'DB Developer', 'Release Management', '12/04/2017', 'assets/image1.png', true,
  8, 8, 8, false, 2, [new EmailRating(-1, '20/11/2018'),
  new EmailRating(-0.5, '22/11/2018'), new EmailRating(-0.3, '23/11/2018'), new EmailRating(0.1, '26/11/2018'),
  new EmailRating(0, '27/11/2018')], 4, [new LeaveRating(1, '20/11/2018'), new LeaveRating(0, '21/11/2018'),
  new LeaveRating(0, '22/11/2018'), new LeaveRating(0, '23/11/2018'), new LeaveRating(1, '26/11/2018'),
  new LeaveRating(1, '27/11/2018'), new LeaveRating(0, '28/11/2018'), new LeaveRating(0, '29/11/2018'),
  new LeaveRating(1, '30/11/2018'), new LeaveRating(1, '1/12/2018'), new LeaveRating(0, '2/12/2018')], 3, [
    new SIORating(4, '20/11/2018'), new SIORating(3, '21/11/2018'), new SIORating(4, '22/11/2018'), new SIORating(4, '23/11/2018'),
    new SIORating(3, '26/11/2018'), new SIORating(4, '27/11/2018'), new SIORating(5, '28/11/2018'), new SIORating(5, '29/11/2018'),
    new SIORating(4, '30/11/2018'), new SIORating(3, '1/12/2018'), new SIORating(1, '2/12/2018')
  ], 5, [new Idletimerating(4, '20/11/2018'), new Idletimerating(0, '21/11/2018'), new Idletimerating(0, '22/11/2018'), new Idletimerating(0, '23/11/2018'),
        new Idletimerating(3, '26/11/2018'), new Idletimerating(4, '27/11/2018'), new Idletimerating(0, '28/11/2018'), new Idletimerating(0, '29/11/2018'),
        new Idletimerating(4, '30/11/2018'), new Idletimerating(3, '1/12/2018'), new Idletimerating(0, '2/12/2018')],
      3, [new Jobsearchrating(5, '20/11/2018'), new Jobsearchrating(0, '21/11/2018'), new Jobsearchrating(0, '22/11/2018'), new Jobsearchrating(0, '23/11/2018'),
        new Jobsearchrating(3, '26/11/2018'), new Jobsearchrating(4, '27/11/2018'), new Jobsearchrating(0, '28/11/2018'), new Jobsearchrating(0, '29/11/2018'),
        new Jobsearchrating(5, '30/11/2018'), new Jobsearchrating(1, '1/12/2018'), new Jobsearchrating(0, '2/12/2018')],
      [new Entertainment(2, '20/11/2018'), new Entertainment(0, '21/11/2018'), new Entertainment(0, '22/11/2018'), new Entertainment(0, '23/11/2018'),
        new Entertainment(4, '26/11/2018'), new Entertainment(3, '27/11/2018'), new Entertainment(0, '28/11/2018'), new Entertainment(0, '29/11/2018'),
        new Entertainment(1, '30/11/2018'), new Entertainment(6, '1/12/2018'), new Entertainment(0, '2/12/2018')], []),
  new RecipeItemComponent('Lily', 'Java Developer', 'Release Management', '03/08/2016', 'assets/image11.jpg', false,
  8, 8, 8, false, 5, [new EmailRating(0, '20/11/2018'),
  new EmailRating(0.5, '22/11/2018'), new EmailRating(-0.5, '23/11/2018'), new EmailRating(-0.2, '26/11/2018'),
  new EmailRating(0.5, '27/11/2018')], 9, [new LeaveRating(1, '20/11/2018'), new LeaveRating(1, '21/11/2018'),
  new LeaveRating(1, '22/11/2018'), new LeaveRating(1, '23/11/2018'), new LeaveRating(1, '26/11/2018'),
  new LeaveRating(1, '27/11/2018'), new LeaveRating(0, '28/11/2018'), new LeaveRating(0, '29/11/2018'),
  new LeaveRating(1, '30/11/2018'), new LeaveRating(1, '1/12/2018'), new LeaveRating(1, '2/12/2018')], 7, [
    new SIORating(8, '20/11/2018'), new SIORating(7, '21/11/2018'), new SIORating(8, '22/11/2018'), new SIORating(7, '23/11/2018'),
    new SIORating(6, '26/11/2018'), new SIORating(6, '27/11/2018'), new SIORating(6, '28/11/2018'), new SIORating(8, '29/11/2018'),
    new SIORating(7, '30/11/2018'), new SIORating(7, '1/12/2018'), new SIORating(6, '2/12/2018')
  ], 8, [new Idletimerating(1, '20/11/2018'), new Idletimerating(2, '21/11/2018'), new Idletimerating(3, '22/11/2018'), new Idletimerating(2, '23/11/2018'),
      new Idletimerating(3, '26/11/2018'), new Idletimerating(2, '27/11/2018'), new Idletimerating(0, '28/11/2018'), new Idletimerating(0, '29/11/2018'),
      new Idletimerating(1, '30/11/2018'), new Idletimerating(1, '1/12/2018'), new Idletimerating(2, '2/12/2018')],
    7, [new Jobsearchrating(1, '20/11/2018'), new Jobsearchrating(0, '21/11/2018'), new Jobsearchrating(1, '22/11/2018'), new Jobsearchrating(0, '23/11/2018'),
      new Jobsearchrating(1, '26/11/2018'), new Jobsearchrating(0, '27/11/2018'), new Jobsearchrating(0, '28/11/2018'), new Jobsearchrating(0, '29/11/2018'),
      new Jobsearchrating(1, '30/11/2018'), new Jobsearchrating(1, '1/12/2018'), new Jobsearchrating(1, '2/12/2018')],
    [new Entertainment(0, '20/11/2018'), new Entertainment(1, '21/11/2018'), new Entertainment(0, '22/11/2018'), new Entertainment(0, '23/11/2018'),
      new Entertainment(1, '26/11/2018'), new Entertainment(1, '27/11/2018'), new Entertainment(0, '28/11/2018'), new Entertainment(0, '29/11/2018'),
      new Entertainment(1, '30/11/2018'), new Entertainment(0, '1/12/2018'), new Entertainment(1, '2/12/2018')], []),
  new RecipeItemComponent('Snape', 'UI Developer', 'FrontEnd', '07/03/2014', 'assets/image1.png', false,
  8, 8, 8, false, 9, [new EmailRating(0.9, '20/11/2018'),
  new EmailRating(0.9, '22/11/2018'), new EmailRating(1, '23/11/2018'), new EmailRating(1, '26/11/2018'),
  new EmailRating(1, '27/11/2018')], 6, [new LeaveRating(1, '20/11/2018'), new LeaveRating(0, '21/11/2018'),
  new LeaveRating(1, '22/11/2018'), new LeaveRating(1, '23/11/2018'), new LeaveRating(0, '26/11/2018'),
  new LeaveRating(0, '27/11/2018'), new LeaveRating(1, '28/11/2018'), new LeaveRating(0, '29/11/2018'),
  new LeaveRating(1, '30/11/2018'), new LeaveRating(0, '1/12/2018'), new LeaveRating(1, '2/12/2018')], 5, [
    new SIORating(5, '20/11/2018'), new SIORating(4, '21/11/2018'), new SIORating(8, '22/11/2018'), new SIORating(5, '23/11/2018'),
    new SIORating(6, '26/11/2018'), new SIORating(4, '27/11/2018'), new SIORating(6, '28/11/2018'), new SIORating(5, '29/11/2018'),
    new SIORating(5, '30/11/2018'), new SIORating(4, '1/12/2018'), new SIORating(5, '2/12/2018')
  ], 8, [new Idletimerating(1, '20/11/2018'), new Idletimerating(0, '21/11/2018'), new Idletimerating(2, '22/11/2018'), new Idletimerating(1, '23/11/2018'),
      new Idletimerating(0, '26/11/2018'), new Idletimerating(0, '27/11/2018'), new Idletimerating(2, '28/11/2018'), new Idletimerating(0, '29/11/2018'),
      new Idletimerating(2, '30/11/2018'), new Idletimerating(0, '1/12/2018'), new Idletimerating(2, '2/12/2018')],
    7, [new Jobsearchrating(1, '20/11/2018'), new Jobsearchrating(0, '21/11/2018'), new Jobsearchrating(1, '22/11/2018'), new Jobsearchrating(1, '23/11/2018'),
      new Jobsearchrating(0, '26/11/2018'), new Jobsearchrating(0, '27/11/2018'), new Jobsearchrating(1, '28/11/2018'), new Jobsearchrating(0, '29/11/2018'),
      new Jobsearchrating(1, '30/11/2018'), new Jobsearchrating(0, '1/12/2018'), new Jobsearchrating(1, '2/12/2018')],
    [new Entertainment(2, '20/11/2018'), new Entertainment(0, '21/11/2018'), new Entertainment(2, '22/11/2018'), new Entertainment(1, '23/11/2018'),
      new Entertainment(0, '26/11/2018'), new Entertainment(0, '27/11/2018'), new Entertainment(2, '28/11/2018'), new Entertainment(0, '29/11/2018'),
      new Entertainment(2, '30/11/2018'), new Entertainment(0, '1/12/2018'), new Entertainment(2, '2/12/2018')], []),
  new RecipeItemComponent('Ron', 'Backend Developer', 'Middleware', '20/10/2012', 'assets/image1.png', false,
  8, 8, 8, false, 8, [new EmailRating(1, '20/11/2018'),
  new EmailRating(0.5, '22/11/2018'), new EmailRating(0.3, '23/11/2018'), new EmailRating(0.2, '26/11/2018'),
  new EmailRating(0, '27/11/2018')], 3, [new LeaveRating(0, '20/11/2018'), new LeaveRating(0, '21/11/2018'),
  new LeaveRating(1, '22/11/2018'), new LeaveRating(0, '23/11/2018'), new LeaveRating(1, '26/11/2018'),
  new LeaveRating(0, '27/11/2018'), new LeaveRating(1, '28/11/2018'), new LeaveRating(0, '29/11/2018'),
  new LeaveRating(0, '30/11/2018'), new LeaveRating(1, '1/12/2018'), new LeaveRating(1, '2/12/2018')], 6, [
    new SIORating(6, '20/11/2018'), new SIORating(8, '21/11/2018'), new SIORating(5, '22/11/2018'), new SIORating(6, '23/11/2018'),
    new SIORating(5, '26/11/2018'), new SIORating(6, '27/11/2018'), new SIORating(6, '28/11/2018'), new SIORating(5, '29/11/2018'),
    new SIORating(5, '30/11/2018'), new SIORating(5, '1/12/2018'), new SIORating(5, '2/12/2018')
  ], 6, [new Idletimerating(0, '20/11/2018'), new Idletimerating(0, '21/11/2018'), new Idletimerating(2, '22/11/2018'), new Idletimerating(0, '23/11/2018'),
      new Idletimerating(1, '26/11/2018'), new Idletimerating(0, '27/11/2018'), new Idletimerating(2, '28/11/2018'), new Idletimerating(0, '29/11/2018'),
      new Idletimerating(0, '30/11/2018'), new Idletimerating(1, '1/12/2018'), new Idletimerating(2, '2/12/2018')],
    5, [new Jobsearchrating(0, '20/11/2018'), new Jobsearchrating(0, '21/11/2018'), new Jobsearchrating(2, '22/11/2018'), new Jobsearchrating(0, '23/11/2018'),
      new Jobsearchrating(1, '26/11/2018'), new Jobsearchrating(0, '27/11/2018'), new Jobsearchrating(2, '28/11/2018'), new Jobsearchrating(0, '29/11/2018'),
      new Jobsearchrating(0, '30/11/2018'), new Jobsearchrating(1, '1/12/2018'), new Jobsearchrating(1, '2/12/2018')],
    [new Entertainment(0, '20/11/2018'), new Entertainment(0, '21/11/2018'), new Entertainment(2, '22/11/2018'), new Entertainment(0, '23/11/2018'),
      new Entertainment(2, '26/11/2018'), new Entertainment(0, '27/11/2018'), new Entertainment(3, '28/11/2018'), new Entertainment(0, '29/11/2018'),
      new Entertainment(0, '30/11/2018'), new Entertainment(2, '1/12/2018'), new Entertainment(2, '2/12/2018')], [])];
  recipesCopy = this.recipes;
  /*@Output() emitSelectedRecipeFromRecipes = new EventEmitter();*/
  public dataReceived: any;
  public searchTerm: string;
  public showOthers = true;
  position = new FormControl('after');
  public highRiskColor = '';
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

  emitShowDetails(showDetails) {
    if (showDetails === 'show'){
      this.showOthers = false;
    }else{
      this.showOthers = true;
    }
  }

  changeColorAndShortlist(){
    if(this.highRiskColor === ''){
      this.highRiskColor = 'warn';
      console.log('shortlist all the high risk ones');
    } else if(this.highRiskColor === 'warn'){
      this.highRiskColor = '';
      console.log('display all');
    }
  }
}
