import { HostListener,
    ElementRef,
    Renderer2,
     Directive,
     HostBinding } from '@angular/core';

@Directive({
    selector:'[appDropdown]',
    exportAs:'appDropDown'
})

export class DropdownDirective {
// @HostBinding('class.open') isOPen= false;
constructor(private el: ElementRef,
    private renderer: Renderer2) {
    }
@HostListener('mouseover') onHover(){
    // this.isOpen=!this.isOPen;

    // let part = this.el.nativeElement.querySelector('.dropdown-content')
    this.renderer.setStyle(this.el.nativeElement.querySelector, 'display', 'block'); 
}
}