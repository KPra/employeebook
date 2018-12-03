import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(public name: string, public designation: string, public team: string, public DOJ: string,
              public image: string) { }

  ngOnInit() {
  }

}
