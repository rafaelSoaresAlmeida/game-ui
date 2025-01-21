import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacManComponent } from './pac-man.component';

describe('PacManComponent', () => {
  let component: PacManComponent;
  let fixture: ComponentFixture<PacManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacManComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
