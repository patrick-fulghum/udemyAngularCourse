import { Directive, Input, TemplateRef, ViewContainerRef, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    @HostListener('click') click(eventData: Event) {
        debugger
        this.renderer.addClass(this.elRef.nativeElement, 'open');
    }


    constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
