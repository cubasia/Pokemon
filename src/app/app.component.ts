import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ex09';
  // links = ['show', 'edit', 'shop', 'api', 'joke', 'pokemone'];
  links = [ 'pokemone'];
  // titles = ['Show', 'Edit', 'Shop', 'Shop-api', 'Joke', 'Pokemone'];
  titles = [ 'Pokemone Game'];
  activeLink = this.links[1];
  myColor: ThemePalette = 'accent';
}
