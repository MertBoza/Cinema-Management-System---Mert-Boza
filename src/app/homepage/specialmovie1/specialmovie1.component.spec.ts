import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialmovie1Component } from './specialmovie1.component';

describe('Specialmovie1Component', () => {
  let component: Specialmovie1Component;
  let fixture: ComponentFixture<Specialmovie1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Specialmovie1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Specialmovie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
