import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongCardBigComponent } from './song-card-big.component';

describe('SongCardBigComponent', () => {
  let component: SongCardBigComponent;
  let fixture: ComponentFixture<SongCardBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongCardBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongCardBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
