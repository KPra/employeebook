import {Component, Injectable} from '@angular/core';
import {RecipeItemComponent} from './recipe-item.component';
import {Observable, Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root',
})
export class RecipeItemHolderComponent {
  private subject = new Subject<any>();
  constructor() {}

  myMethod(data) {
    console.log('inside RecipeItemHolderComponent' + data);
    console.log('adding to subject');
    this.subject.next(data);
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }
}
