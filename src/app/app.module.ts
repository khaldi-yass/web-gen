import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WgenErrorHandler} from './shared/wgen-error-handler';
import {WgenAlertComponent} from './wgen-alert/wgen-alert.component';
import {WgenNavbarComponent} from './navbar/wgen-navbar.component';
import {DropdownModule, MDBBootstrapModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';
import {WgenBreadCrumbComponent} from './wgen-bread-crumb/wgen-bread-crumb.component';
import { WgenTestHomeComponent } from './wgen-test-home/wgen-test-home.component';
import { WgenTestPage1Component } from './wgen-test-home/wgen-test-page1/wgen-test-page1.component';
import { WgenTestPage2Component } from './wgen-test-home/wgen-test-page2/wgen-test-page2.component';
import { WgenTestPage21Component } from './wgen-test-home/wgen-test-page2/wgen-test-page21/wgen-test-page21.component';

@NgModule({
  declarations: [
    AppComponent,
    WgenAlertComponent,
    WgenNavbarComponent,
    WgenBreadCrumbComponent,
    WgenTestHomeComponent,
    WgenTestPage1Component,
    WgenTestPage2Component,
    WgenTestPage21Component
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    DropdownModule,
    WavesModule
  ],
  providers: [{provide: ErrorHandler, useClass: WgenErrorHandler}],
  bootstrap: [AppComponent],
  entryComponents: [WgenAlertComponent]
})
export class AppModule {
}
