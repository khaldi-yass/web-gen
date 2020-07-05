import {Component, Input, OnInit} from '@angular/core';
import {WgenImageModel} from './wgen-image.model';

@Component({
  selector: 'wgen-image',
  templateUrl: './wgen-image.component.html',
  styleUrls: ['./wgen-image.component.scss']
})
export class WgenImageComponent implements OnInit {

  @Input() model: WgenImageModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
