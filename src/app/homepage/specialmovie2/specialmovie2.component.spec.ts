import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Specialmovie2Component } from './specialmovie2.component';

describe('Specialmovie2Component', () => {
  let component: Specialmovie2Component;
  let fixture: ComponentFixture<Specialmovie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Specialmovie2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Specialmovie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
