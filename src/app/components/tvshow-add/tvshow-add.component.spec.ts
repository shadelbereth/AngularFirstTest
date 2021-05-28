import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVShowAddComponent } from './tvshow-add.component';

describe('TVShowAddComponent', () => {
  let component: TVShowAddComponent;
  let fixture: ComponentFixture<TVShowAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVShowAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVShowAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
