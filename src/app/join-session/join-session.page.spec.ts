import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinSessionPage } from './join-session.page';

describe('JoinSessionPage', () => {
  let component: JoinSessionPage;
  let fixture: ComponentFixture<JoinSessionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JoinSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
