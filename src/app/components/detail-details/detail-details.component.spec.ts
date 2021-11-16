import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDetailsComponent } from './detail-details.component';

describe('DetailDetailsComponent', () => {
  let component: DetailDetailsComponent;
  let fixture: ComponentFixture<DetailDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
