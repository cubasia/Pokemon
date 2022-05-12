import { ComponentFixture, TestBed } from '@angular/core/testing';

//import { HttpClientModule } from '@angular/common/http';
import { JokeContainerComponent } from './joke-container.component';
import { HttpclientService } from 'src/app/services/HttpClient/HttpClientServices';
import {   HttpClientTestingModule,  HttpTestingController} from '@angular/common/http/testing';
import { JOKE } from 'src/app/model/joke-interface';

describe('JokeContainerComponent', () => {
  let component: JokeContainerComponent;
  let fixture: ComponentFixture<JokeContainerComponent>;
  let HttpClientServiceObj: HttpclientService;
  const fakeJoke: JOKE = {
    error: false,
    category: '',
    type: 'string',
    flags: {
      fake: true,
    },
    id: 0,
    safe: true,
    lang: 'string',
  };

beforeEach(() =>
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpclientService],
  })
);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JokeContainerComponent],
      providers: [HttpclientService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeContainerComponent)
    HttpClientServiceObj = TestBed.inject( HttpclientService)
      component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ', () => {
    expect(component).toBeTruthy();
  });

  it('Should addLike', () => {
    const result = component.addLike(fakeJoke)
    expect(result).toBeFalsy();
    expect(component.joeLikeArray).toContain(fakeJoke)
   expect(component.joeDislikeArray).not.toContain(fakeJoke);
  })

  it('Should NOT addLike', () => {
    const result = component.addLike(fakeJoke);
    expect(result).toBeFalsy();
    expect(component.joeDislikeArray).not.toContain(fakeJoke);
    expect(component.joeLikeArray).toHaveSize(1)
  });
it('Should delLike', () => {
  const result = component.delLike(fakeJoke);
  expect(result).toBeFalsy();
  expect(component.joeLikeArray).not.toContain(fakeJoke);
});

it('Should addDisLike', () => {
  const result = component.addDislike(fakeJoke);
  expect(result).toBeFalsy();
  expect(component.joeDislikeArray).toContain(fakeJoke);
  expect(component.joeLikeArray).not.toContain(fakeJoke);
});

it('Should NOT addDislike', () => {
  const result = component.addDislike(fakeJoke);
  expect(result).toBeFalsy();
  expect(component.joeLikeArray).not.toContain(fakeJoke);
  expect(component.joeDislikeArray).toHaveSize(1);
});

  it('Should MoveDislike', () => {
    const result = component.movDislike(fakeJoke);
    expect(result).toBeFalsy();
    expect(component.joeLikeArray).toContain(fakeJoke);
    expect(component.joeDislikeArray).not.toContain(fakeJoke);
  });


it('Should MoveLike', () => {
  const result = component.movLike(fakeJoke);
  expect(result).toBeFalsy();
  expect(component.joeLikeArray).not.toContain(fakeJoke);
  expect(component.joeDislikeArray).toContain(fakeJoke);
});


  it('Should delDislike', () => {
    const result = component.delDislike(fakeJoke);
    expect(result).toBeFalsy();
    expect(component.joeDislikeArray).not.toContain(fakeJoke);
  });

});
