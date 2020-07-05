import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {WgenAlertColor} from '../shared/wgen.types';
import {WgenIconModel} from '../wgen-icon/wgen-icon.model';

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
  public closeIcon: WgenIconModel;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.addClass(this.alert.nativeElement, 'alert-' + this.color.valueOf());
    this.closeIcon = new WgenIconModel('far', 'fa-times-circle');
  }

  closeAlert() {
    this.renderer.removeClass(this.alert.nativeElement, 'animate__fadeInUp');
    this.renderer.addClass(this.alert.nativeElement, 'animate__fadeOutUp');
    setTimeout(() => this.alertContainer.nativeElement.remove(), 550);
  }

}
