import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsViewAltPage } from './teams-view-alt.page';

describe('TeamsViewAltPage', () => {
  let component: TeamsViewAltPage;
  let fixture: ComponentFixture<TeamsViewAltPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeamsViewAltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
