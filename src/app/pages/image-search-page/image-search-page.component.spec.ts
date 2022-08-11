import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchPageComponent } from './image-search-page.component';

describe('ImageSearchPageComponent', () => {
  let component: ImageSearchPageComponent;
  let fixture: ComponentFixture<ImageSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
