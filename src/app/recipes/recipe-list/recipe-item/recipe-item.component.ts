import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(public name: string, public designation: string, public team: string, public DOJ: string,
              public image: string, public notify: boolean, public team_email_cumulative: number,
              public team_leave_cumulative: number,
              public team_sio_cumulative: number,public favorite: boolean,
              public email_cumulative: number,
              public email_detailed: any[],
              public leave_cumulative: number,
              public leave_detailed: any[],
              public sio_cumulative: number,
              public sio_detailed: any[],
              public idle_cumulative: number,
              public idle_detailed: any[],
              public reports: RecipeItemComponent[]) { }

  ngOnInit() {
  }

}
