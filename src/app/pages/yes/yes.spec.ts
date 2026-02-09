import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yes } from './yes';

describe('Yes', () => {
  let component: Yes;
  let fixture: ComponentFixture<Yes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
