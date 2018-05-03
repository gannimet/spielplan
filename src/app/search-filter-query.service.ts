import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class SearchFilterQueryService {

    change: Subject<string> = new Subject();

    constructor() { }

    queryChanged(newQuery) {
        this.change.next(newQuery);
    }

}
