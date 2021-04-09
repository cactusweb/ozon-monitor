import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PidAddComponent } from './pid-add.component';

describe('PidAddComponent', () => {
  let component: PidAddComponent;
  let fixture: ComponentFixture<PidAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PidAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PidAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
