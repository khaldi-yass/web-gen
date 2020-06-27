import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {WgenDynamicComponentFactory} from './wgen-dynamic-component-factory';
import {WgenAlertComponent} from '../wgen-alert/wgen-alert.component';
import {WgenAlertColor} from './wgen.types';

@Injectable({providedIn: 'root'})
export class WgenErrorHandler implements ErrorHandler {

  constructor(private componentFactory: WgenDynamicComponentFactory) {
  }

  private static getServerMessage(response: HttpErrorResponse): string {
    const msg = response.error.Message;
    if (msg) {
      return response.status + ' - ' + msg + ': ' + response.error.ExceptionMessage;
    }
    return 'Application can not execute because API hasn\'t been started';
  }

  handleError(error: Error | HttpErrorResponse) {
    let message;
    let emphasis;
    // Logging
    if (error instanceof HttpErrorResponse) {
      console.error(error.error.StackTrace);
      message = WgenErrorHandler.getServerMessage(error);
    } else {
      console.error(error.stack);
      message = error.message ? error.message : error.toString();
      emphasis = error.name + ': ';
    }
    // Show wgen-alert
    this.showAlert(message, emphasis, 'danger');
  }

  private showAlert(message: string, emphasis: string, color: WgenAlertColor) {
    const alertRef = this.componentFactory.add(WgenAlertComponent, '#DynAlertComp');
    alertRef.instance.message = message;
    alertRef.instance.emphasis = emphasis;
    alertRef.instance.color = color;
  }
}
