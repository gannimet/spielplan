import { Component, Optional, OnInit, Inject, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { GameResult } from '../models/game';

@Component({
    selector: 'app-game-result-input',
    templateUrl: './game-result-input.component.html',
    styleUrls: ['./game-result-input.component.scss'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => GameResultInputComponent),
        multi: true
    }]
})
export class GameResultInputComponent implements OnInit, ControlValueAccessor {

    result: GameResult;
    homeGoals: number;
    awayGoals: number;

    ngOnInit() {
        this.result = new GameResult();
    }

    writeValue(value: any) {
        this.result = value;
    }

    registerOnChange(fn: (_: any) => void): void {}

    registerOnTouched(fn: () => void): void {}

}
