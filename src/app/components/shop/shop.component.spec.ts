import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopComponent } from './shop.component';


describe('ShopComponent', () => {
  let component: ShopComponent;
  let fixture: ComponentFixture<ShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search', () => {
    const result = fixture.componentInstance.Search()
    //spyOn(fixture.componentInstance, 'Search')
    expect(result).toBeFalsy()
    //expect(fixture.componentInstance.Search).toHaveBeenCalled()
  })
  it('should reset', () => {
     const result = fixture.componentInstance.Reset()
     expect(result).toBeFalsy()
  // spyOn(fixture.componentInstance, 'Reset')
  // expect(fixture.componentInstance.Reset).toHaveBeenCalled();
  })

});
