import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoundsPage } from './rounds.page';

describe('RoundsPage', () => {
  let component: RoundsPage;
  let fixture: ComponentFixture<RoundsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RoundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
