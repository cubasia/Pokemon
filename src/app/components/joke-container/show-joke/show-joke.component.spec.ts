import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JOKE } from 'src/app/model/joke-interface';

import { ShowJokeComponent } from './show-joke.component';

describe('ShowJokeComponent', () => {
  let component: ShowJokeComponent;
  let fixture: ComponentFixture<ShowJokeComponent>;
  const joke: JOKE = {
    error: false,
    category: 'string',
    type: 'medium',
    flags: { ring: true },
    id: 1,
    safe: true,
    lang: 'ita',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should cancella', () => {
    const result = component.cancella(joke);
    expect(result).toBeFalsy();
  });

  it('should muovi', () => {
    const result = component.muovi(joke);
    expect(result).toBeFalsy();
  });
  
});
