import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appSliderElement]'
})
export class SliderElementDirective {
  @Input() hoverScaleFactor = 1.1;
  private timer = null;

  constructor(public element: ElementRef) {
    element.nativeElement.style.display = 'inline-block';
    element.nativeElement.style.position = 'relative';
    element.nativeElement.style.transition = 'transform .5s ease-in-out';
    element.nativeElement.style.willChange = 'transform';
  }

  get nativeElement() {
    return this.element.nativeElement;
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(e) {
    e.stopPropagation();
    this.timer = setTimeout(() => {
      this.element.nativeElement.style.transform = `scale(${this.hoverScaleFactor})`;
      this.element.nativeElement.style.zIndex = 1;
    }, 500);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e) {
    e.stopPropagation();
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.element.nativeElement.style.transform = 'scale(1.0)';
  }

  @HostListener('transitionend', ['$event']) onTransitionEnd(e) {
    e.stopPropagation();
    if (this.element.nativeElement.style.transform.trim() === 'scale(1)') {
      this.element.nativeElement.style.zIndex = 0;
    }
  }
}
