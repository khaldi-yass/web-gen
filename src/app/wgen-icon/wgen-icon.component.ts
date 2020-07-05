import {Component, Input, OnInit} from '@angular/core';
import {WgenIconModel} from './wgen-icon.model';

@Component({
  selector: 'wgen-icon',
  templateUrl: './wgen-icon.component.html',
  styleUrls: ['./wgen-icon.component.scss']
})
export class WgenIconComponent implements OnInit {

  @Input() model: WgenIconModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
