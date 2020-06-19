import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-slider-controls',
  templateUrl: './slider-controls.component.html',
  styleUrls: ['./slider-controls.component.scss']
})
export class SliderControlsComponent implements OnInit {
  @Output() controlClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onControlClick(isLeft: boolean) {
    this.controlClick.emit(isLeft);
  }

}
