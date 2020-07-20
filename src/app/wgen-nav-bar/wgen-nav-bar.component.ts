import {Component, Input, OnInit} from '@angular/core';
import {WgenNavBarModel} from './wgen-nav-bar.model';

@Component({
  selector: 'wgen-nav-bar',
  templateUrl: './wgen-nav-bar.component.html',
  styleUrls: ['./wgen-nav-bar.component.scss']
})
export class WgenNavBarComponent implements OnInit {

  @Input() model: WgenNavBarModel;
  console = console;
  constructor() {
  }

  ngOnInit(): void {
  }

}
