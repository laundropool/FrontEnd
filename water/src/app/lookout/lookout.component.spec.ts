import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookoutComponent } from './lookout.component';

describe('LookoutComponent', () => {
  let component: LookoutComponent;
  let fixture: ComponentFixture<LookoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
