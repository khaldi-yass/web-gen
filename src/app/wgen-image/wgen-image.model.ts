export class WgenImageModel {

  constructor(public url: string,
              public height?: number,
              public width?: number,
              public alt?: string) {
    this.init();
  }

  private init() {
  }

}
