import {
  AfterContentInit, AfterViewInit,
  Component,
  ContentChildren,
  ElementRef, Input, OnDestroy,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';

import {SliderElementDirective} from './slider-element.directive';

@Component({
  selector: 'app-smooth-slider',
  templateUrl: './smooth-slider.component.html',
  styleUrls: ['./smooth-slider.component.scss']
})
export class SmoothSliderComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {
  @Input() numberOfScrolledElements = 1;
  @ContentChildren(SliderElementDirective) sliderElements: QueryList<SliderElementDirective>;
  @ViewChild('Container') container: ElementRef;
  elementsWidth = 0;
  containerWidth = 0;
  scrollMargin = 0;
  singleElementWidth = 0;
  currentScrollPosition = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    const that = this;
    window.removeEventListener('resize', that.onResize);
  }

  calculateElements() {
    if (this.sliderElements && this.sliderElements.length > 0) {
      const {width} = this.sliderElements.first.nativeElement.getBoundingClientRect();
      this.singleElementWidth = width;
      this.elementsWidth = (this.sliderElements.length * width) + 90;
      this.numberOfScrolledElements = this.numberOfScrolledElements > this.sliderElements.length ? 1 : this.numberOfScrolledElements;
    }
  }

  calculateContainer() {
    this.containerWidth = this.container.nativeElement.getBoundingClientRect().width;
    this.scrollMargin = this.elementsWidth - this.containerWidth;
  }

  onResize() {
    this.calculateElements();
    this.calculateContainer();
  }

  registerListener() {
    window.removeEventListener('resize', () => this.onResize());
    window.addEventListener('resize', () => this.onResize());
  }

  ngAfterContentInit() {
    this.calculateElements();
  }

  ngAfterViewInit() {
    this.calculateContainer();
    this.registerListener();
  }

  moveSlider(isLeft: boolean) {
    const nextStep = (isLeft ? this.singleElementWidth : -this.singleElementWidth) * this.numberOfScrolledElements;
    const sliderStart = 0;
    const sliderEnd = -this.scrollMargin;
    const nextPosition = this.currentScrollPosition + nextStep;
    if (!isLeft && this.currentScrollPosition - sliderEnd < this.singleElementWidth && this.currentScrollPosition > sliderEnd) {
      this.currentScrollPosition = sliderEnd;
    } else if (isLeft && this.currentScrollPosition * -1 < this.singleElementWidth && this.currentScrollPosition < sliderStart) {
      this.currentScrollPosition = sliderStart;
    } else if (nextPosition >= sliderEnd && nextPosition <= sliderStart) {
      this.currentScrollPosition = nextPosition;
    }
  }

  onControlClick(isLeft: boolean) {
    this.moveSlider(isLeft);
  }
}
