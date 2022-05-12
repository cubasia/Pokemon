import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { JOKE } from 'src/app/model/joke-interface';
import { EMPTY, fromEvent, interval, map,  mapTo,  merge,  Observable, of, startWith, Subject, Subscription, switchMap, takeWhile, tap } from 'rxjs';
import { JokeService } from 'src/app/services/joke/joke.service';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

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

const jokeObservale2: Observable<JOKE> = of(fakeJoke);
@Component({
  selector: 'app-joke-container',
  templateUrl: './joke-container.component.html',
  styleUrls: ['./joke-container.component.css'],
  providers: [JokeService]
})
@AutoUnsubscribe()
export class JokeContainerComponent implements AfterViewInit, OnDestroy {
  constructor(private jokeClientService: JokeService) {}
  isOn = false;
  @ViewChild('pause', { read: ElementRef })
  buttonStop!: ElementRef;
  @ViewChild('resume', { read: ElementRef })
  buttonGo!: ElementRef;

  jokeObservale!: Observable<JOKE>;
  stoppable = false;

  pause$: Subject<boolean> = new Subject();
  resume$: Subject<boolean> = new Subject();
  interval$ = interval(5000).pipe(
    startWith(0),
    map((a) => 1)
  );
  OnOff(value: boolean) {
    this.isOn = !value;
    value ? this.pause$.next(value) : this.resume$.next(value);
  }

  get joeLikeArray(): JOKE[] {
    return this.jokeClientService.getLikeArray();
  }
  get joeDislikeArray(): JOKE[] {
    return this.jokeClientService.getDislikeArray();
  }

  ngAfterViewInit(): void {

    this.jokeObservale = merge(this.pause$, this.resume$).pipe(
      startWith(true),
      tap((n) => (this.stoppable = n)),
      switchMap((val) => (val ? this.interval$ : EMPTY)),
      switchMap((val) =>
        val > 0 ? this.jokeClientService.getnewJoke() : jokeObservale2
      ),
      takeWhile((v) => {
        if (v.id == 0) return false;
        else return true;
      })
    );
  }
  ngOnDestroy() {
    // this.pause$.unsubscribe();
    // this.resume$.unsubscribe();
  }

  addLike(element: JOKE): void {
    this.jokeClientService.addLike(element);
  }
  addDislike(element: JOKE): void {
    this.jokeClientService.addDislike(element);
  }

  delLike(element: JOKE): void {
    this.jokeClientService.delLike(element);
  }
  delDislike(element: JOKE): void {
    this.jokeClientService.delDislike(element);
  }
  movLike(element: JOKE): void {
    this.jokeClientService.movLike(element);
  }
  movDislike(element: JOKE): void {
    this.jokeClientService.movDislike(element);
  }
}


