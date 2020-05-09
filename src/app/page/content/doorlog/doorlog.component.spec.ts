import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorlogComponent } from './doorlog.component';

describe('DoorlogComponent', () => {
  let component: DoorlogComponent;
  let fixture: ComponentFixture<DoorlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
