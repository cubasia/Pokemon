import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MaterialModule } from 'src/app/module/components';


@NgModule({
  declarations: [
    AppComponent
  //ShowCounterComponent,
  //EditCounterComponent,
  //  ShopComponent,
  //  ShowApiComponent,
  // ShowJokeComponent,
  // JokeContainerComponent,
  // ShowJokedislikeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   MaterialModule,
    //FormsModule,
    //ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}



