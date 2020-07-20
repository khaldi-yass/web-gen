import {Component, ContentChild, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {WgenSideNavService} from './wgen-side-nav.service';
import {Subscription} from 'rxjs';
import {WgenNavBarModel} from '../wgen-nav-bar/wgen-nav-bar.model';
import {WgenSideNavModel} from './wgen-side-nav.model';

@Component({
  selector: 'wgen-side-nav',
  templateUrl: './wgen-side-nav.component.html',
  styleUrls: ['./wgen-side-nav.component.scss']
})
export class WgenSideNavComponent implements OnInit, OnDestroy {

  collapsed: boolean;
  private sub = new Subscription();
  @ContentChild('content') content: ElementRef;
  @Input() model: WgenSideNavModel;

  constructor(private service: WgenSideNavService) {
  }

  ngOnInit(): void {
    this.sub = this.service.toggler.subscribe(() => this.collapsed = !this.collapsed);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
