import { ComponentFixture, TestBed } from '@angular/core/testing';

import { No } from './no';

describe('No', () => {
  let component: No;
  let fixture: ComponentFixture<No>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [No]
    })
    .compileComponents();

    fixture = TestBed.createComponent(No);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
