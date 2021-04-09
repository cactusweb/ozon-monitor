import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PidViewComponent } from './pid-view.component';

describe('PidViewComponent', () => {
  let component: PidViewComponent;
  let fixture: ComponentFixture<PidViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PidViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PidViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
