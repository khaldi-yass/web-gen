import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {WgenTestHomeComponent} from './wgen-test-home/wgen-test-home.component';
import {WgenTestPage1Component} from './wgen-test-home/wgen-test-page1/wgen-test-page1.component';
import {WgenTestPage2Component} from './wgen-test-home/wgen-test-page2/wgen-test-page2.component';
import {WgenTestPage21Component} from './wgen-test-home/wgen-test-page2/wgen-test-page21/wgen-test-page21.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {
    path: 'test', component: WgenTestHomeComponent, children: [
      {path: 'p1', component: WgenTestPage1Component},
      {
        path: 'p2', component: WgenTestPage2Component, children: [
          {path: 'p1', component: WgenTestPage21Component}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
