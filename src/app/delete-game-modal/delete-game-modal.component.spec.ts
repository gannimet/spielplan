import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGameModalComponent } from './delete-game-modal.component';

describe('DeleteGameModalComponent', () => {
  let component: DeleteGameModalComponent;
  let fixture: ComponentFixture<DeleteGameModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGameModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGameModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
