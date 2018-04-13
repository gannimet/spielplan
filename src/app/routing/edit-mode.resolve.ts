import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditModeResolve implements Resolve<boolean> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
      return Observable.of(route.paramMap.get('id') != null);
  }

}
