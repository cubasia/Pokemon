import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCounterComponent } from './edit-counter.component';

describe('EditCounterComponent', () => {
  let component: EditCounterComponent;
  let fixture: ComponentFixture<EditCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add', () => {
    const result = component.add();
    expect(result).toBeFalsy();
  })

  it('should sub', () => {
    const result = component.sub();
    expect(result).toBeFalsy();
  })

  it('should check', () => {
    const result = component.check();
    expect(result).toBeFalsy();
  })

  it('should Allarme OK', () => {
    const result = component.mostraAllarme(1)
    expect(result).toBeTruthy();
  })
  it('should Allarme NOK', () => {
    const result = component.mostraAllarme(-1)
    expect(result).toBeFalsy();
  })

  it('should Mostra', () => {
      const result = component.mostraErrore();
      expect(result).toBeFalsy();
  });

});
