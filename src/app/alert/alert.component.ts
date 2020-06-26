import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AlertColor} from './utils/alert.types';

@Component({
  selector: 'wgen-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() color: AlertColor = 'light';
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
