import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioVisualProdDetailComponent } from './audio-visual-prod-detail.component';

describe('AudioVisualProdDetailComponent', () => {
  let component: AudioVisualProdDetailComponent;
  let fixture: ComponentFixture<AudioVisualProdDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioVisualProdDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioVisualProdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
