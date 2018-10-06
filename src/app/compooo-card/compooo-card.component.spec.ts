import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoooCardComponent } from './compooo-card.component';

describe('CompoooCardComponent', () => {
  let component: CompoooCardComponent;
  let fixture: ComponentFixture<CompoooCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoooCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoooCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
