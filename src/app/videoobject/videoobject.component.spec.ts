import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoobjectComponent } from './videoobject.component';

describe('VideoobjectComponent', () => {
  let component: VideoobjectComponent;
  let fixture: ComponentFixture<VideoobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoobjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
