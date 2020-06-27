import {WgenColors, WgenTextColors} from '../shared/wgen.types';
import {WgenIcon} from '../shared/wgen.models';

export class WgenBreadCrumbModel {
  private classes: string[] = [];
  private customClasses: string[] = [];

  constructor(public items?: WgenBreadCrumbItemModel[],
              public bgColor?: WgenColors,
              public textColor?: WgenTextColors,
              public icon?: WgenIcon,
              public autoFill?: boolean) {
    this.init();
  }

  private init() {
    if (this.bgColor) this.customClasses.push(this.bgColor);
    if (this.textColor) this.customClasses.push(this.textColor);
    if (this.icon) this.classes.push('bc-icons');
  }

  getCustomClasses() {
    return this.customClasses.join(' ');
  }

  getClasses() {
    return this.classes.join(' ');
  }
}

export class WgenBreadCrumbItemModel {
  constructor(public label: string,
              public active?: boolean,
              public icon?: WgenIcon,
              public link: string[] = []) {
    this.init();
  }

  private init() {

  }

  getLink() {
    return this.link;
  }
}
