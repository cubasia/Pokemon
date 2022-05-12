import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowApiComponent } from './show-api.component';
import { HttpclientService } from 'src/app/services/HttpClient/HttpClientServices';
import {  HttpClientTestingModule,  HttpTestingController,} from '@angular/common/http/testing';

describe('ShowApiComponent', () => {
  let component: ShowApiComponent;
  let fixture: ComponentFixture<ShowApiComponent>;
  let HttpClientServiceObj: HttpclientService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpclientService],
    })
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowApiComponent ],
      providers: [HttpclientService]    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowApiComponent);
    HttpClientServiceObj = TestBed.inject(HttpclientService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
