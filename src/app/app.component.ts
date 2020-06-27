import {Component} from '@angular/core';
import {WgenBreadCrumbItemModel, WgenBreadCrumbModel} from './wgen-bread-crumb/wgen-bread-crumb.models';
import {WgenIcon} from './shared/wgen.models';

@Component({
  selector: 'wgen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-gen';

  private static getItems() {
    const tw = new WgenIcon('fab', 'twitter', null, 'blue-text', 'mr-3');
    const ig = new WgenIcon('fab', 'instagram', null, 'pink-text', 'mr-2');
    const fb = new WgenIcon('fab', 'facebook-square', null, 'blue-grey-text', null);
    return [new WgenBreadCrumbItemModel('twitter', null, tw),
      new WgenBreadCrumbItemModel('instagram', null, ig),
      new WgenBreadCrumbItemModel('facebook', true, fb),
      new WgenBreadCrumbItemModel('Item4', true)
    ];
  }

  breadCrumbModel(): WgenBreadCrumbModel {
    return new WgenBreadCrumbModel(AppComponent.getItems(), 'pink lighten-3', 'indigo-text');
  }

  breadCrumbModel2(): WgenBreadCrumbModel {
    const ig = new WgenIcon('fab', 'instagram', null, 'pink-text', 'mr-2');
    return new WgenBreadCrumbModel(AppComponent.getItems(), 'pink lighten-3', 'indigo-text', ig);
  }


}
