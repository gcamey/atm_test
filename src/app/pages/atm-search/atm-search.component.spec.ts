import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmSearchComponent } from './atm-search.component';

describe('AtmSearchComponent', () => {
  let component: AtmSearchComponent;
  let fixture: ComponentFixture<AtmSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
