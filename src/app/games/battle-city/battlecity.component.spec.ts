import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlecityComponent } from './battlecity.component';

describe('BattlecityComponent', () => {
  let component: BattlecityComponent;
  let fixture: ComponentFixture<BattlecityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattlecityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattlecityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
