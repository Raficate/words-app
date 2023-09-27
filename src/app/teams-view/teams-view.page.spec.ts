import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamsViewPage } from './teams-view.page';

describe('TeamsViewPage', () => {
  let component: TeamsViewPage;
  let fixture: ComponentFixture<TeamsViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TeamsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
