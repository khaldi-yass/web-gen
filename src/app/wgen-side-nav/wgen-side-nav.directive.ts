import {Directive, HostListener} from '@angular/core';
import {WgenSideNavService} from './wgen-side-nav.service';

@Directive({
  selector: '[wgenSideNavCollapse]'
})
export class WgenSideNavDirective {
  constructor(private service: WgenSideNavService) {
  }

  @HostListener('click') collapse() {
    this.service.toggler.next();
  }
}


