import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectsComponent } from './suspects.component';

describe('SuspectsComponent', () => {
  let component: SuspectsComponent;
  let fixture: ComponentFixture<SuspectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
