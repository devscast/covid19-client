import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-animated-digit',
  template: `
    <div #animatedDigit class="font-bold text-xl text-base">
      <span>{{digit}}</span>
    </div>
  `,
})
export class AnimatedDigitComponent implements AfterViewInit, OnChanges {
  @Input() duration: number;
  @Input() digit: any;
  @Input() steps: number;
  @ViewChild('animatedDigit', { static: true }) animatedDigit: ElementRef;

  animateCount() {
    if (!this.duration) {
      this.duration = 3000;
    }

    if (this.digit) {
      this.counterFunc(parseInt(this.digit, 10), this.duration, this.animatedDigit);
    }
  }

  counterFunc(endValue, durationMs, element) {
    if (!this.steps) {
      this.steps = 12;
    }

    const stepCount = Math.abs(durationMs / this.steps);
    const valueIncrement = (endValue - 0) / stepCount;
    const sinValueIncrement = Math.PI / stepCount;

    let currentValue = 0;
    let currentSinValue = 0;

    function step() {
      currentSinValue += sinValueIncrement;
      currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

      element.nativeElement.textContent = Math.abs(Math.floor(currentValue));

      if (currentSinValue < Math.PI) {
        window.requestAnimationFrame(step);
      }
    }

    step();
  }

  ngAfterViewInit() {
      this.animateCount();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.digit) {
      this.animateCount();
    }
  }
}
