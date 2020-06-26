import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector} from '@angular/core';

export type ComponentType<T> = new (...args: any[]) => T;

/**
 * const cr = this._service.add(MyComponent); // will create MyComponent and attach it to document.body or
 * const cr = this._service.add(MyComponent, this.someElement); // to attach to Element stored in this.someElement or
 * const cr = this._service.add(MyComponent, 'body div.my-class > div.my-other-div'); // to search for that element and attach to it
 * const cr = this._service.add(MyComponent, '#someId'); // to search for that element by id
 * const crIndex = this._service.getIndex(cr);
 * cr.instance.myInputProperty = 42;
 * cr.instance.myOutputEmitter.subscribe(
 * () => {
 *      // do something then for example remove this component
 *      this._service.remove(cr);
 *   }
 *  );
 *  this._service.remove(crIndex); // remove by index or
 *  this._service.remove(cr); // remove by reference or
 *  this._service.clear(); // remove all dynamically created components
 */
@Injectable({
  providedIn: 'root'
})
export class WGenDynamicComponentFactory {

  private components: ComponentRef<any>[] = [];
  private appRef: ApplicationRef;

  constructor(private resolver: ComponentFactoryResolver, private injector: Injector) {
  }

  add<T>(component: ComponentType<T> | ComponentRef<T>, element?: Element | string): ComponentRef<T> {

    const componentRef = component instanceof ComponentRef ?
      component : this.resolver.resolveComponentFactory(component).create(this.injector);

    this.appRef = this.injector.get(ApplicationRef);
    this.appRef.attachView(componentRef.hostView);

    if (typeof element === 'string') {
      element = document.querySelector(element);
    }
    if (!element) {
      element = document.body;
    }
    element.appendChild((componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement);
    this.components.push(componentRef);
    return componentRef;
  }

  remove(dialog: number | ComponentRef<any>): boolean {
    let componentRef;
    if (typeof dialog === 'number' && this.components.length > dialog) {
      componentRef = this.components.splice(dialog, 1)[0];
    } else {
      for (const cr of this.components) {
        if (cr === dialog) {
          componentRef = cr;
        }
      }
    }
    if (componentRef) {
      this._remove(componentRef);
      return true;
    }
    return false;
  }

  private _remove(componentRef: ComponentRef<any>) {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }

  clear() {
    while (this.components.length > 0) {
      this._remove(this.components.pop());
    }
  }

  getIndex(componentRef: ComponentRef<any>): number {
    return this.components.indexOf(componentRef);
  }

}
