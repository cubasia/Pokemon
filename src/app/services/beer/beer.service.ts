import { Injectable } from '@angular/core';
import { Beer } from 'src/app/model/beer-interface';
import { Birre } from 'src/app/mock-up/beers-mock-up';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  birreobservable:Observable<Beer[]> = of(Birre)
  constructor() { }
  get() {
    return this.birreobservable
  }
  getId(id: number) {
    let birraVuota: Beer = { 'id': id,type:'small',name:"",price:-1 };
    let index = Birre.findIndex(element => element.id == id)
    if (index == -1)
      console.log("Element not found")
    else
      return of(Birre[index])
    return of(birraVuota);
  }
}
