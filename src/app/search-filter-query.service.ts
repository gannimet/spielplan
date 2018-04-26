import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SearchFilterQueryService {

    change: EventEmitter<string> = new EventEmitter();

    constructor() { }

    queryChanged(newQuery) {
        this.change.emit(newQuery);
    }

}
