import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialmovie3Component } from './specialmovie3.component';

describe('Specialmovie3Component', () => {
  let component: Specialmovie3Component;
  let fixture: ComponentFixture<Specialmovie3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Specialmovie3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Specialmovie3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
