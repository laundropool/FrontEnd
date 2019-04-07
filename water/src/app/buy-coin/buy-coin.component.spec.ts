import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCoinComponent } from './buy-coin.component';

describe('BuyCoinComponent', () => {
  let component: BuyCoinComponent;
  let fixture: ComponentFixture<BuyCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
