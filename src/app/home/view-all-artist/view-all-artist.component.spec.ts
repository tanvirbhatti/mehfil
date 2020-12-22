import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllArtistComponent } from './view-all-artist.component';

describe('ViewAllArtistComponent', () => {
  let component: ViewAllArtistComponent;
  let fixture: ComponentFixture<ViewAllArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
