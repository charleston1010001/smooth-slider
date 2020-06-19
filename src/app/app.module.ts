import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmoothSliderComponent } from './smooth-slider/smooth-slider.component';
import { SliderControlsComponent } from './smooth-slider/slider-controls/slider-controls.component';
import { SliderElementDirective } from './smooth-slider/slider-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    SmoothSliderComponent,
    SliderControlsComponent,
    SliderElementDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
