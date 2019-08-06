import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppService2 {
  constructor() {
    console.log('AppService2 instantiated!');
  }

  method3() {
    console.log('method3 called!');
  }
}
