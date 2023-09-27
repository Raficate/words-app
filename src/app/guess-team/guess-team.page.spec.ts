import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuessTeamPage } from './guess-team.page';

describe('GuessTeamPage', () => {
  let component: GuessTeamPage;
  let fixture: ComponentFixture<GuessTeamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuessTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
