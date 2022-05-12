import { Injectable } from '@angular/core';
import { JOKE } from 'src/app/model/joke-interface';
import { HttpclientService } from 'src/app/services/HttpClient/HttpClientServices';

const BASEURL = 'https://v2.jokeapi.dev';
const CATEGORIES = ['Programming', 'Misc', 'Pun', 'Spooky', 'Christmas'];
const PARAMS = ['blacklistFlags=nsfw,religious,racist', 'idRange=0-300'];
const URL = BASEURL + '/joke/' + CATEGORIES.join(',') + '?' + PARAMS.join('&');

  @Injectable() //Senza providein perchè è registrato a livello di component
  export class JokeService {
    joeLikeArray: JOKE[] = [];
    joeDislikeArray: JOKE[] = [];

    constructor(private httpService: HttpclientService) {}

    getnewJoke() {
      return this.httpService.getWithUrl<JOKE>(URL);
    }

    getLikeArray(): JOKE[] {
      return this.joeLikeArray;
    }
    getDislikeArray(): JOKE[] {
      return this.joeDislikeArray;
    }

    addLike(element: JOKE): void {
      if (
        !this.joeLikeArray.find((val) => val.id == element.id) &&
        !this.joeDislikeArray.find((val) => val.id == element.id)
      ) {
        this.joeLikeArray.push(element);
      }
    }
    addDislike(element: JOKE): void {
      if (
        !this.joeDislikeArray.find((val) => val.id == element.id) &&
        !this.joeLikeArray.find((val) => val.id == element.id)
      ) {
        this.joeDislikeArray.push(element);
      }
    }

    delLike(element: JOKE): void {
      const index = this.joeLikeArray.findIndex((val) => val.id == element.id);
      this.joeLikeArray.splice(index, 1);
    }
    delDislike(element: JOKE): void {
      const index = this.joeDislikeArray.findIndex(
        (val) => val.id == element.id
      );
      this.joeDislikeArray.splice(index, 1);
    }
    movLike(element: JOKE): void {
      this.delLike(element);
      this.addDislike(element);
    }
    movDislike(element: JOKE): void {
      this.delDislike(element);
      this.addLike(element);
    }
  }
