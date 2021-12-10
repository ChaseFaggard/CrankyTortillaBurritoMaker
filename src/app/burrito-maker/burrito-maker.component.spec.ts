import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurritoMakerComponent } from './burrito-maker.component';

describe('BurritoMakerComponent', () => {
  let component: BurritoMakerComponent;
  let fixture: ComponentFixture<BurritoMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurritoMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurritoMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
