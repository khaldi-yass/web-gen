import {Injectable} from '@angular/core';
import {WgenIcon} from './wgen.models';
import {WgenBreadCrumbItemModel, WgenBreadCrumbModel} from '../wgen-bread-crumb/wgen-bread-crumb.models';

@Injectable({
  providedIn: 'root'
})
export class WgenRootService {

  constructor() {
  }

  private static getItems() {
    const tw = new WgenIcon('fab', 'twitter', null, 'blue-text', 'mr-3');
    const ig = new WgenIcon('fab', 'instagram', null, 'pink-text', 'mr-2');
    const fb = new WgenIcon('fab', 'facebook-square', null, 'blue-grey-text', null);
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
    const ic = new WgenIcon('fas', 'caret-right', null, 'pink-text', 'mr-2');
    return new WgenBreadCrumbModel(WgenRootService.getItems(), 'pink lighten-3', 'indigo-text', ic, true);
  }
}
