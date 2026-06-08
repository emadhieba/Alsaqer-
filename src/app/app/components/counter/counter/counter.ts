import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-counter',
  template: `<span>{{ displayValue }}{{ suffix }}</span>`,
})
export class Counter implements OnInit {
  @Input() target = 0;
  @Input() suffix = '';
  displayValue = 0;
  private hasAnimated = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !this.hasAnimated) {
        this.hasAnimated = true;
        this.animateCounter();
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(this.el.nativeElement);
  }

  private animateCounter(): void {
    const duration = 1500;
    const steps = 60;
    const increment = this.target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= this.target) {
        this.displayValue = this.target;
        clearInterval(interval);
      } else {
        this.displayValue = Math.floor(current);
      }
    }, duration / steps);
  }
}