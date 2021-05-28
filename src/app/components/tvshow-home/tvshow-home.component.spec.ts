import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVShowHomeComponent } from './tvshow-home.component';

describe('TVShowHomeComponent', () => {
  let component: TVShowHomeComponent;
  let fixture: ComponentFixture<TVShowHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVShowHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVShowHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
