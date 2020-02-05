import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertMovieComponent } from './upsert-movie.component';

describe('UpsertMovieComponent', () => {
  let component: UpsertMovieComponent;
  let fixture: ComponentFixture<UpsertMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsertMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
