import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountTeamPage } from './count-team.page';

describe('CountTeamPage', () => {
  let component: CountTeamPage;
  let fixture: ComponentFixture<CountTeamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CountTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
