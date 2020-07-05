import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {WgenRoutingModule} from './wgen-routing.module';
import {WgenComponent} from './wgen.component';
import {WgenErrorHandler} from './shared/wgen-error-handler';
import {WgenAlertComponent} from './wgen-alert/wgen-alert.component';
import {BreadcrumbModule, DropdownModule, IconsModule, MDBBootstrapModule, NavbarModule, WavesModule} from 'angular-bootstrap-md';
import {WgenBreadCrumbComponent} from './wgen-bread-crumb/wgen-bread-crumb.component';
import {WgenTestHomeComponent} from './wgen-test-home/wgen-test-home.component';
import {WgenTestPage1Component} from './wgen-test-home/wgen-test-page1/wgen-test-page1.component';
import {WgenTestPage2Component} from './wgen-test-home/wgen-test-page2/wgen-test-page2.component';
import {WgenTestPage21Component} from './wgen-test-home/wgen-test-page2/wgen-test-page21/wgen-test-page21.component';
import {WgenFooterComponent} from './wgen-footer/wgen-footer.component';
import {WgenNavBarComponent} from './wgen-nav-bar/wgen-nav-bar.component';
import {WgenIconComponent} from './wgen-icon/wgen-icon.component';
import {WgenRippleDirective} from './directives/wgen-ripple.directive';
import {WgenImageComponent} from './wgen-image/wgen-image.component';
import {WgenSideNavDirective} from './wgen-side-nav/wgen-side-nav.directive';
import {WgenSideNavComponent} from './wgen-side-nav/wgen-side-nav.component';

@NgModule({
  declarations: [
    WgenComponent,
    WgenAlertComponent,
    WgenBreadCrumbComponent,
    WgenTestHomeComponent,
    WgenTestPage1Component,
    WgenTestPage2Component,
    WgenTestPage21Component,
    WgenFooterComponent,
    WgenNavBarComponent,
    WgenIconComponent,
    WgenRippleDirective,
    WgenImageComponent,
    WgenSideNavDirective,
    WgenSideNavComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    WgenRoutingModule,
    NavbarModule,
    DropdownModule,
    WavesModule,
    IconsModule,
    BreadcrumbModule
  ],
  providers: [{provide: ErrorHandler, useClass: WgenErrorHandler}],
  bootstrap: [WgenComponent],
  entryComponents: [WgenAlertComponent]
})
export class WgenModule {
}
