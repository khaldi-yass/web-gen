import {WgenColors, WgenGradient} from '../shared/wgen.types';
import {WgenIconModel} from '../wgen-icon/wgen-icon.model';
import {WgenImageModel} from '../wgen-image/wgen-image.model';

class WgenSideNavBackground {
  constructor(public baseColor: WgenColors = 'indigo',
              public backgroundImage?: string,
              public colorOverlay?: WgenColors,
              public gradientOverlay?: WgenGradient) {
  }
}

export class WgenSideNavModel {
  private sideClasses: string[] = ['navbar'];

  constructor(public brand?: WgenSideNavItemModel,
              public items?: WgenSideNavItemModel[],
              public background?: WgenSideNavBackground,
              public theme: 'light' | 'dark' = 'dark') {
    this.init();
  }

  private init() {

  }

  public getSideClasses() {
    return this.sideClasses.join(' ');
  }
}

export class WgenSideNavItemModel {
  private soloItemClasses: string[] = ['nav-item'];
  private parentItemClasses: string[] = ['nav-item dropdown'];
  private classes: string[] = [];
  private linkClasses: string[] = ['nav-link'];

  constructor(public label?: string,
              public icon?: WgenIconModel,
              public image?: WgenImageModel,
              public link?: string,
              public active?: boolean,
              public children?: WgenSideNavItemModel[]) {
    this.init();
  }

  private init() {
    // this.linkClasses.push('waves-light');
    if (this.active) this.classes.push('active');
    // if (!this.link) this.soloItemClasses.push('cursor-default');
  }

  public getSoloItemClasses() {
    return this.soloItemClasses.join(' ');
  }

  public getParentItemClasses() {
    return this.parentItemClasses.join(' ');
  }

  public getLinkClasses() {
    return this.linkClasses.join(' ');
  }

  public getClasses() {
    return this.classes.join(' ');
  }
}

