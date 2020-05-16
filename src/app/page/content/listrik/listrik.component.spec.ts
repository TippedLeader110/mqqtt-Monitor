import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrikComponent } from './listrik.component';

describe('ListrikComponent', () => {
  let component: ListrikComponent;
  let fixture: ComponentFixture<ListrikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
