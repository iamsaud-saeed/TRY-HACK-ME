import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompeteComponent } from './compete.component';

describe('CompeteComponent', () => {
  let component: CompeteComponent;
  let fixture: ComponentFixture<CompeteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CompeteComponent]
    });
    fixture = TestBed.createComponent(CompeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
