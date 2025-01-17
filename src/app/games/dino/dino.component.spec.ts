import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoComponent } from './dino.component';

describe('DinoComponent', () => {
  let component: DinoComponent;
  let fixture: ComponentFixture<DinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
