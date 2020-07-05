import {Injectable} from '@angular/core';
import {WgenBreadCrumbItemModel, WgenBreadCrumbModel} from '../wgen-bread-crumb/wgen-bread-crumb.model';
import {WgenIconModel} from '../wgen-icon/wgen-icon.model';
import {WgenNavGroupModel, WgenNavItemModel, WgenNavModel} from '../wgen-nav-bar/wgen-nav-bar.model';

@Injectable({
  providedIn: 'root'
})
export class WgenRootService {

  constructor() {
  }

  private static getItems() {
    const tw = new WgenIconModel('fab', 'twitter', null, 'blue-text', 'mr-3');
    const ig = new WgenIconModel('fab', 'instagram', null, 'pink-text', 'mr-2');
    const fb = new WgenIconModel('fab', 'facebook-square', null, 'blue-grey-text', null);
    return [new WgenBreadCrumbItemModel('twitter', null, tw, ['test']),
      new WgenBreadCrumbItemModel('instagram', null, ig),
      new WgenBreadCrumbItemModel('facebook', true, fb),
      new WgenBreadCrumbItemModel('Item4', true)
    ];
  }

  breadCrumbModel(): WgenBreadCrumbModel {
    return new WgenBreadCrumbModel(WgenRootService.getItems(), 'pink lighten-3', 'indigo-text');
  }

  breadCrumbModel2(): WgenBreadCrumbModel {
    const ic = new WgenIconModel('fas', 'caret-right', null, 'pink-text', 'mr-2');
    return new WgenBreadCrumbModel(WgenRootService.getItems(), 'pink lighten-3', 'indigo-text', ic, false);
  }

  getNavbar() {
    const brand = new WgenNavGroupModel([new WgenNavItemModel('MyBrand')]);
    return new WgenNavModel([brand]);
  }
}
