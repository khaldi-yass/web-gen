import {Component, OnInit} from '@angular/core';
import {WgenRootService} from '../shared/wgen-root.service';

@Component({
  selector: 'wgen-test-home',
  templateUrl: './wgen-test-home.component.html',
  styleUrls: ['./wgen-test-home.component.scss']
})
export class WgenTestHomeComponent implements OnInit {
  breadCrumbModel: any;
  breadCrumbModel2: any;
  navbarModel: any;

  constructor(private root: WgenRootService) {
    this.breadCrumbModel = this.root.breadCrumbModel();
    this.breadCrumbModel2 = this.root.breadCrumbModel2();
    this.navbarModel = this.root.getNavbar();
  }

  ngOnInit(): void {
  }

}
