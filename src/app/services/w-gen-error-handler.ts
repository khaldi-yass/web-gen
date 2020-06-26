import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {WGenDynamicComponentFactory} from './w-gen-dynamic-component-factory';
import {AlertComponent} from '../alert/alert.component';
import {AlertColor} from '../alert/utils/alert.types';

@Injectable({providedIn: 'root'})
export class WgenErrorHandler implements ErrorHandler {

  constructor(private componentFactory: WGenDynamicComponentFactory) {
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
    // Show alert
    this.showAlert(message, emphasis, 'danger');
  }

  private showAlert(message: string, emphasis: string, color: AlertColor) {
    const alertRef = this.componentFactory.add(AlertComponent, '#DynAlertComp');
    alertRef.instance.message = message;
    alertRef.instance.emphasis = emphasis;
    alertRef.instance.color = color;
  }
}
