import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/services/beer/beer.service';
import { Beer } from 'src/app/model/beer-interface';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  constructor(private beerService: BeerService) {}
  birre!: Observable<Beer[]>;
  beertype = ['small', 'medium'];
  selectBeerName = new FormControl('');
  selectBeerType = new FormControl('');
  favoriteColorControl = new FormControl('');
  selectName = true
  selectType = true
  selectButton = true
  result = false
  birreresultC: Beer[]=[]
  birreresult: Beer[]=[]
  ngOnInit(): void {
    this.birre = this.beerService.get();
    this.birre.subscribe((x) => (this.birreresultC = x));
  }

  Search() {
    this.birreresult = this.birreresultC.filter(element =>
      element.name == this.selectBeerName.value &&
      element.type == this.selectBeerType.value)
    this.result=true
  }
  Reset() {
    this.selectName = true;
    this.selectType = true;
    this.selectButton = true;
    this.result=false
    this.selectBeerName.setValue("")
    this.selectBeerType.setValue("")
  }
}
