import {Injectable} from "@angular/core";
import {AppService2} from "./AppService2";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(as2: AppService2) {
    console.log('AppService initialized!');
    as2.method3();
  }

  method1() {
    console.log('method1 of AppService invoked!');
  }
}

export function method2() {
  console.log('method2 invoked');
}
