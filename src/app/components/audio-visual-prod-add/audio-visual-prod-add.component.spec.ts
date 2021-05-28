import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioVisualProdAddComponent } from './audio-visual-prod-add.component';

describe('AudioVisualProdAddComponent', () => {
  let component: AudioVisualProdAddComponent;
  let fixture: ComponentFixture<AudioVisualProdAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioVisualProdAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioVisualProdAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
