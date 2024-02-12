import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedTeamComponent } from './red-team.component';

describe('RedTeamComponent', () => {
  let component: RedTeamComponent;
  let fixture: ComponentFixture<RedTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RedTeamComponent]
    });
    fixture = TestBed.createComponent(RedTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
