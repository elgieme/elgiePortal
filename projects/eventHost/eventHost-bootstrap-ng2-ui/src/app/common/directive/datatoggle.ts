import { Directive, OnInit, Input, HostListener, OnDestroy, ElementRef } from '@angular/core';


@Directive({
  selector: '[dataToggle]'
})
export class DataToggle implements OnInit, OnDestroy {
  @Input('dataToggle') dataToggle: string;
  @Input() dataTarget: string;
  @Input() open : string;

  constructor(private el: ElementRef) {
    this.open = 'show';
  }

  public ngOnInit() {
    console.log('dataToggle: init');
  }

  @HostListener('click') onClick() {
    if (this.dataToggle === 'collapse') {
      this.toggleCollapse();
    } else if(this.dataToggle === 'modal'){
      this.toggleModal();
    }
  }

  public toggleCollapse() {
    let target = document.querySelector(this.dataTarget);

    if (this.open === 'show') {
      target.className = target.className.replace('show', '');
      this.open = 'hide';
    } else {
      target.className += ' show ';
      this.open = 'show';
    }
  }
  
  public toggleModal() {
    let target = document.querySelector(this.dataTarget);

    if (target.className.includes('show')) {
      target.className = target.className.replace('show', '');
      target.setAttribute('style', '');
    } else {
      target.className += ' show ';
      target.setAttribute('style', 'display: block');
    }
    
    //TOOD '<div class="modal-backdrop fade"></div>');
  }

  public ngOnDestroy() {
  }
}
