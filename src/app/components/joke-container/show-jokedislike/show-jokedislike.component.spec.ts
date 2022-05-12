import { ComponentFixture, TestBed } from '@angular/core/testing';
import {JOKE} from '../../../model/joke-interface'

import { ShowJokedislikeComponent } from './show-jokedislike.component';

describe('ShowJokedislikeComponent', () => {
  let component: ShowJokedislikeComponent;
  let fixture: ComponentFixture<ShowJokedislikeComponent>;
const joke: JOKE = {
 error: false,
  category: "string",
  type: "medium",
  flags: { "ring": true },
  id: 1,
  safe: true,
  lang: "ita"
    }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowJokedislikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJokedislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cancella', () => {
    const result = component.cancella(joke)
    expect(result).toBeFalsy()
  })

  it('should muovi', () => {
    const result = component.muovi(joke);
    expect(result).toBeFalsy();
  })
});
