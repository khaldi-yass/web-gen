export class WgenImageModel {

  constructor(public url: string,
              public height?: number,
              public width?: number,
              public alt?: string) {
    this.init();
  }

  private init() {
    if (!this.height) this.height = (this.width) ? this.width : 0;
    if (!this.width) this.width = (this.height) ? this.height : 0;
  }
}
