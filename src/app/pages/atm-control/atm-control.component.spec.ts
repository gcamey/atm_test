import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmControlComponent } from './atm-control.component';

describe('AtmControlComponent', () => {
  let component: AtmControlComponent;
  let fixture: ComponentFixture<AtmControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
