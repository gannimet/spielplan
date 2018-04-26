import { Component, OnInit } from '@angular/core';

import { SearchFilterQueryService } from '../search-filter-query.service';

@Component({
    selector: 'app-navi',
    templateUrl: './navi.component.html',
    styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {

    constructor(private queryService: SearchFilterQueryService) { }

    ngOnInit() {
    }

    queryChanged(newValue: string) {
        this.queryService.queryChanged(newValue);
    }

}
