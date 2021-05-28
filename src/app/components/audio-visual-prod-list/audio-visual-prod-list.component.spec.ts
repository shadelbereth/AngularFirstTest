import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioVisualProdListComponent } from './audio-visual-prod-list.component';

describe('MovieListComponent', () => {
  let component: AudioVisualProdListComponent;
  let fixture: ComponentFixture<AudioVisualProdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioVisualProdListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioVisualProdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
