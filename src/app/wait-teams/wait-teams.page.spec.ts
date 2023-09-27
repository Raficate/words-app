import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaitTeamsPage } from './wait-teams.page';

describe('WaitTeamsPage', () => {
  let component: WaitTeamsPage;
  let fixture: ComponentFixture<WaitTeamsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WaitTeamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
