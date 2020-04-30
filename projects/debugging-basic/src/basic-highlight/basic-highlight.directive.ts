import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
// tslint:disable-next-line:directive-class-suffix
export class BasicHighlightDirecitive implements OnInit {
    constructor(private elementRef: ElementRef ) {
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        // this.render.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', false, false );
    }
}
