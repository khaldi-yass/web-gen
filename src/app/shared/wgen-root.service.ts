import {Injectable} from '@angular/core';
import {WgenBreadCrumbItemModel, WgenBreadCrumbModel} from '../wgen-bread-crumb/wgen-bread-crumb.model';
import {WgenIconModel} from '../wgen-icon/wgen-icon.model';
import {WgenNavBarGroupModel, WgenNavBarItemModel, WgenNavBarModel} from '../wgen-nav-bar/wgen-nav-bar.model';
import {WgenImageModel} from '../wgen-image/wgen-image.model';
import {WgenSideNavItemModel, WgenSideNavModel} from '../wgen-side-nav/wgen-side-nav.model';

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

  public navBar(): WgenNavBarModel {
    const brand = new WgenNavBarItemModel(null, null, new WgenImageModel('assets/images/logo.png', 40, null, 'WgenLogo'));
    const home = new WgenNavBarItemModel('Home', new WgenIconModel('fas', 'home'), null, '#');
    const features = new WgenNavBarItemModel('Features', new WgenIconModel('fas', 'clipboard-list'), null, '#');
    const pricing = new WgenNavBarItemModel('Pricing', new WgenIconModel('fas', 'coins'), null, '#');
    const group1 = new WgenNavBarGroupModel([home, features, pricing], 'left');
    return new WgenNavBarModel(brand, [group1], 'indigo', 'md', 'dark');
  }

  sideNav() {
    const brand = new WgenSideNavItemModel('Brand', new WgenIconModel('fas', 'gem'));
    const home = new WgenSideNavItemModel('Home', new WgenIconModel('fas', 'home'), null, '/test');
    const about = new WgenSideNavItemModel('About Us', new WgenIconModel('fas', 'users'));
    const blog = new WgenSideNavItemModel('Blog', new WgenIconModel('fas', 'blog'));
    const services = new WgenSideNavItemModel('Services', new WgenIconModel('fas', 'hands'));
    const contact = new WgenSideNavItemModel('Contact', new WgenIconModel('fas', 'headset'));

    return new WgenSideNavModel(brand, [home, about, blog, services, contact]);
  }
}
