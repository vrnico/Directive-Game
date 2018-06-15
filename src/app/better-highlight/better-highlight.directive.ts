import { Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'red';

  constructor(private elRef:  ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

    @HostListener('mouseenter') mouseover(eventData: Event){
          // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
          this.backgroundColor = 'blue';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
          // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
            this.backgroundColor = 'yellow';
    }
}
