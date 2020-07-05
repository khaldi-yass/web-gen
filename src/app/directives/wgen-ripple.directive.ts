import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[wgenRipple]'
})
export class WgenRippleDirective {

  private readonly hostNative: HTMLElement;
  @Input() public wgenRippleColor = 'white';
  @Input() public wgenRippleAnimationDuration = 1000;
  @Input() public wgenRippleType: 'overlay' | 'append' = 'append';

  constructor(private host: ElementRef, private renderer: Renderer2) {
    this.hostNative = host.nativeElement;
  }

  @HostListener('click', ['$event']) ripple(e: MouseEvent) {
    const rect = this.hostNative.getBoundingClientRect();
    let host: HTMLElement;
    if (this.wgenRippleType === 'overlay') {
      host = this.getOverlayDiv(this.hostNative.parentElement, rect);
    } else {
      host = this.hostNative;
    }
    const ripple = this.getRippleSpan(e.clientX - rect.left, e.clientY - rect.top);
    this.renderer.addClass(host, 'wgen-ripple-host');
    host.appendChild(ripple);
    setTimeout(() => this.renderer.removeChild(host, ripple), this.wgenRippleAnimationDuration);
  }

  private getRippleSpan(x: number, y: number): HTMLSpanElement {
    const ripple: HTMLSpanElement = document.createElement('span');
    this.renderer.addClass(ripple, 'wgen-ripple');
    this.renderer.setStyle(ripple, 'left', x + 'px');
    this.renderer.setStyle(ripple, 'top', y + 'px');
    this.renderer.setStyle(ripple, 'background', this.wgenRippleColor);
    this.renderer.setStyle(ripple, 'animation-duration', this.wgenRippleAnimationDuration + 'ms');
    return ripple;
  }

  private getOverlayDiv(parent: HTMLElement, rect: DOMRect): HTMLDivElement {
    const div: HTMLDivElement = document.createElement('div');
    this.renderer.setStyle(div, 'left', rect.left + window.scrollX + 'px');
    this.renderer.setStyle(div, 'top', rect.top + window.scrollY + 'px');
    this.renderer.setStyle(div, 'width', rect.width + 'px');
    this.renderer.setStyle(div, 'height', rect.height + 'px');
    this.renderer.setStyle(div, 'position', 'absolute');
    parent.appendChild(div);
    setTimeout(() => this.renderer.removeChild(parent, div), this.wgenRippleAnimationDuration);
    return div;
  }
}


