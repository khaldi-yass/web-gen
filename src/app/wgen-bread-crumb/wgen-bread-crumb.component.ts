import {Component, Input, OnInit} from '@angular/core';
import {WgenBreadCrumbModel} from './wgen-bread-crumb.models';

@Component({
  selector: 'wgen-bread-crumb',
  templateUrl: './wgen-bread-crumb.component.html',
  styleUrls: ['./wgen-bread-crumb.component.scss']
})
export class WgenBreadCrumbComponent implements OnInit {

  @Input() model: WgenBreadCrumbModel = new WgenBreadCrumbModel();

  constructor() {
  }

  ngOnInit(): void {
  }

}
