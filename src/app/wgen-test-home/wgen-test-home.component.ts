import {Component, OnInit} from '@angular/core';
import {WgenRootService} from '../shared/wgen-root.service';
import {WgenNavBarModel} from '../wgen-nav-bar/wgen-nav-bar.model';
import {WgenSideNavModel} from '../wgen-side-nav/wgen-side-nav.model';

@Component({
  selector: 'wgen-test-home',
  templateUrl: './wgen-test-home.component.html',
  styleUrls: ['./wgen-test-home.component.scss']
})
export class WgenTestHomeComponent implements OnInit {

  public navBar: WgenNavBarModel;
  public sideNav: WgenSideNavModel;

  constructor(private root: WgenRootService) {
  }

  ngOnInit(): void {
    this.navBar = this.root.navBar();
    this.sideNav = this.root.sideNav();
  }

}
