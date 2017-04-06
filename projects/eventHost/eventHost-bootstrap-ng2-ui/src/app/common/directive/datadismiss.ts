import { Directive, OnInit, Input, HostListener, OnDestroy, ElementRef } from '@angular/core';

@Directive({
  selector: '[dataDismiss]'
})
export class DataDismiss implements OnInit, OnDestroy {
  @Input('dataDismiss') dataDismiss: string;

  constructor(private el: ElementRef) {
  }

  public ngOnInit() {
    console.log('dataToggle: init');
  }

  @HostListener('click') onClick() {
    if (this.dataDismiss === 'collapse') {
      this.toggleCollapse();
    } else if(this.dataDismiss === 'modal'){
      this.toggleModal();
    }
  }

  public toggleCollapse() {
    if (this.el.nativeElement.className.includes('show')) {
      this.el.nativeElement.className = this.el.nativeElement.className.replace('show', '');
    } else {
      this.el.nativeElement.className += ' show ';
    }
  }
  
  public findParent (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }
  
  public toggleModal() {
    let modal = this.findParent(this.el.nativeElement, 'modal');
    
    if (modal.className.includes('show')) {
      modal.className = modal.className.replace('show', '');
      modal.setAttribute('style', '');
    } else {
      modal.className += ' show ';
      modal.setAttribute('style', 'display: block');
    }
    
    //TOOD '<div class="modal-backdrop fade"></div>');
  }

  public ngOnDestroy() {
  }
}
