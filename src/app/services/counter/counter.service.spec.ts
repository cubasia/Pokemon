import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new number', () => {
    const result = service.add(2)
    expect(result).toBeFalsy()
  })

  it('should add a new number - error', () => {
    const result = service.add(-2);
    expect(result).toBeTruthy();
  });

  it('should sub a new number' , () => {
    let result = service.add(2);
    result = service.sub(1);
    expect(result).toBeFalsy();
  });

  it('should sub a new number - error 10', () => {
  let result = service.add(2);
  result = service.sub(10);
  expect(result).toBeTruthy();
  });

  it('should sub a new number - error neg', () => {
    const result = service.sub(-10);
    expect(result).toBeTruthy();
  });

});
