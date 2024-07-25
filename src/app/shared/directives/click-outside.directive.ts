// src/app/click-outside.directive.ts
import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    const elementRect = this.elementRef.nativeElement.getBoundingClientRect();
    const isElementVisible = elementRect.left >= 0 && elementRect.left < window.innerWidth;

    if (!clickedInside && isElementVisible) {
      this.clickOutside.emit();
    }
  }
}
