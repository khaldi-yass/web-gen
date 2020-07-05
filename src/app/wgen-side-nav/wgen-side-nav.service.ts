import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WgenSideNavService {
  public toggler: Subject<void> = new Subject<void>();

  constructor() {
  }
}
