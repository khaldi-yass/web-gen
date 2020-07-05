import {Component, Input, OnInit} from '@angular/core';
import {WgenBreadCrumbItemModel, WgenBreadCrumbModel} from './wgen-bread-crumb.model';
import {NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'wgen-bread-crumb',
  templateUrl: './wgen-bread-crumb.component.html',
  styleUrls: ['./wgen-bread-crumb.component.scss']
})
export class WgenBreadCrumbComponent implements OnInit {

  @Input() model: WgenBreadCrumbModel = new WgenBreadCrumbModel();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (this.model.resolveFromRoute) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationStart))
        .subscribe((value: NavigationStart) => {
          this.resolveBreadCrumb(value.url);
        });
      this.resolveBreadCrumb(this.router.url);
    }
  }

  private resolveBreadCrumb(resolvedUrl: string) {
    const items: WgenBreadCrumbItemModel[] = [];
    const urlFragments = resolvedUrl.split('/');
    urlFragments.shift();
    urlFragments.forEach((fragment, i) => {
      const label = fragment.charAt(0).toUpperCase() + fragment.slice(1);
      const active = (i === urlFragments.length - 1);
      let link = [];
      if (!active) {
        let url = '/';
        for (let j = 0; j <= i; j++) {
          url += urlFragments[j] + '/';
        }
        link = [url];
      }
      items.push(new WgenBreadCrumbItemModel(label, active, null, link));
    });
    this.model = new WgenBreadCrumbModel(items, this.model.bgColor, this.model.textColor, this.model.icon, false);
  }

}
