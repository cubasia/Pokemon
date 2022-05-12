import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CounterService } from 'src/app/services/counter/counter.service';


@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css'],
})
export class EditCounterComponent implements OnInit {
  @ViewChild('valore') valueInput!: ElementRef;
  counter!: BehaviorSubject<number>;
  constructor(private counterService: CounterService) { }
  errore=false
  errore2=false
  errorMsg=""
  ngOnInit(): void {
    this.counter = this.counterService.get();
  }
  add() {
   const valueInput:number = this.valueInput.nativeElement.value *1;
    if (this.mostraAllarme(valueInput)) {
      this.errorMsg = this.counterService.add(valueInput);
      this.errorMsg && this.mostraErrore()
    }

  }
  sub() {
    const valueInput = this.valueInput.nativeElement.value *1;
    if (this.mostraAllarme(valueInput)) {
      this.errorMsg = this.counterService.sub(valueInput);
      this.errorMsg && this.mostraErrore();
    }
  }
  check() {
    const valueInput: number = this.valueInput.nativeElement.value * 1;
    this.mostraAllarme(valueInput)
  }

  mostraAllarme(testvalue:number):boolean {
    if (testvalue < 0) {
      this.errore = true;
      setTimeout(() => {
        this.errore = false;
      }, 2000);
      return false
    }
    return true
  }
  mostraErrore(){
    this.errore2 = true;
      setTimeout(() => {
        this.errore2 = false;
      }, 2000);
    }

  }
