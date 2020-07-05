import {WgenIconSize, WgenIconType, WgenTextColors} from '../shared/wgen.types';

export class WgenIconModel {
  private classes: string[] = [];

  constructor(public type: WgenIconType,
              public name: string,
              public size?: WgenIconSize,
              public color?: WgenTextColors,
              public customClasses?: string) {
    this.init();
  }

  private init() {
    if (this.color) this.classes.push(this.color);
    if (this.customClasses) this.classes.push(this.customClasses);
  }

  getClasses() {
    return this.classes.join(' ');
  }
}
