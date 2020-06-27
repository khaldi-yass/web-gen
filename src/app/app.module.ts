import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WgenErrorHandler} from './shared/wgen-error-handler';
import {WgenAlertComponent} from './wgen-alert/wgen-alert.component';
import {WgenNavbarComponent} from './navbar/wgen-navbar.component';
import {DropdownModule, MDBBootstrapModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';
import {WgenBreadCrumbComponent} from './wgen-bread-crumb/wgen-bread-crumb.component';

@NgModule({
  declarations: [
    AppComponent,
    WgenAlertComponent,
    WgenNavbarComponent,
    WgenBreadCrumbComponent
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
