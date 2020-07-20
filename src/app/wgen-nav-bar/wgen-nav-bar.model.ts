import {Vp, WgenColors} from '../shared/wgen.types';
import {WgenIconModel} from '../wgen-icon/wgen-icon.model';
import {WgenImageModel} from '../wgen-image/wgen-image.model';

export class WgenNavBarModel {
  private sideClasses: string[] = ['navbar'];

  constructor(public brand: WgenNavBarItemModel,
              public itemGroups?: WgenNavBarGroupModel[],
              public color: WgenColors = 'indigo',
              public expandAt: Vp = 'lg',
              public theme: 'light' | 'dark' = 'dark') {
    this.init();
  }

  private init() {
    if (this.color) this.sideClasses.push(this.color);
    if (this.expandAt) this.sideClasses.push('navbar-expand-' + this.expandAt);
    if (this.theme) this.sideClasses.push('navbar-' + this.theme);
  }

  public getSideClasses() {
    return this.sideClasses.join(' ');
  }
}

export class WgenNavBarGroupModel {
  private classes: string[] = ['navbar-nav'];

  constructor(public items?: WgenNavBarItemModel[],
              public spacer?: 'left' | 'right') {
    this.init();
  }

  private init() {
    if (this.spacer && this.spacer === 'left') this.classes.push('ml-auto');
    if (this.spacer && this.spacer === 'right') this.classes.push('mr-auto');
  }

  public getClasses() {
    return this.classes.join(' ');
  }
}

export class WgenNavBarItemModel {
  private soloItemClasses: string[] = ['nav-item'];
  private parentItemClasses: string[] = ['nav-item dropdown'];
  private linkClasses: string[] = ['nav-link'];

  constructor(public label?: string,
              public icon?: WgenIconModel,
              public image?: WgenImageModel,
              public link?: string,
              public active?: boolean,
              public children?: WgenNavBarItemModel[]) {
    this.init();
  }

  private init() {
    this.linkClasses.push('waves-light');
    if (this.active) this.soloItemClasses.push('active');
    if (!this.link) this.soloItemClasses.push('cursor-default');
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

}

