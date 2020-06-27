import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {WgenAlertColor} from '../shared/wgen.types';

@Component({
  selector: 'wgen-alert',
  templateUrl: './wgen-alert.component.html',
  styleUrls: ['./wgen-alert.component.scss']
})
export class WgenAlertComponent implements OnInit {

  @Input() color: WgenAlertColor = 'light';
  @Input() message: string;
  @Input() emphasis: string;
  @ViewChild('alert', {static: true}) alert: ElementRef;
  @ViewChild('alertContainer', {static: true}) alertContainer: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.addClass(this.alert.nativeElement, 'alert-' + this.color.valueOf());
  }

  closeAlert() {
    this.renderer.removeClass(this.alert.nativeElement, 'animate__fadeInUp');
    this.renderer.addClass(this.alert.nativeElement, 'animate__fadeOutUp');
    setTimeout(() => this.alertContainer.nativeElement.remove(), 550);
  }

}
