import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleScreenPage } from './title-screen.page';

describe('TitleScreenPage', () => {
  let component: TitleScreenPage;
  let fixture: ComponentFixture<TitleScreenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TitleScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
