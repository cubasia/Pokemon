import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = 0
  constructor() { }
  countervObservable= new  BehaviorSubject(this.counter)
  add(addendo:number = 1):string {
    let _errore=""
    if (addendo < 0) _errore='invalid value < 0';
    else {
      this.counter += addendo;
      this.countervObservable.next(this.counter)
    }
    return _errore
  }

  get() {
    return this.countervObservable
  }
  sub(addendo = 1) {
    let _errore=""
    if (addendo < 0)
      _errore="invalid value < 0"
    else if (this.counter - addendo < 0)
      _errore="invalid value, too high"
    else {
      this.counter -= addendo;
      this.countervObservable.next(this.counter);
    }
    return _errore  }
}
