import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVShowDetailComponent } from './tvshow-detail.component';

describe('TVShowDetailComponent', () => {
  let component: TVShowDetailComponent;
  let fixture: ComponentFixture<TVShowDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVShowDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
