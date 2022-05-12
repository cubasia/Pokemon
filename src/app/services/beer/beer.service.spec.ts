import { TestBed } from '@angular/core/testing';

import { BeerService } from './beer.service';
import { Beer } from 'src/app/model/beer-interface';

describe('BeerService', () => {
  let service: BeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not find a beer', () => {
    const beer = service.getId(-10)
    let birra :Beer
    beer.subscribe(x => birra = x)
    expect(birra!.price).toBeLessThan(0)
  })
  it('should find a beer', () => {
    const beer = service.getId(1);
    let birra: Beer;
    beer.subscribe((x) => (birra = x));
    expect(birra!.price).toBeGreaterThan(0)
  });
});
