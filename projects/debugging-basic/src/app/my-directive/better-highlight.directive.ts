import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
// tslint:disable:no-inferrable-types
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'; // palegoldenrod
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  // @HostBinding('style.backgroundColor') backgroundColor: string = 'lightGreen'; // initial value
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private eleRef: ElementRef, private renderer: Renderer2 ) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'orange');
    this.backgroundColor = this.defaultColor;
  }
}
