import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetBikerComponent } from './carnet-biker.component';

describe('CarnetBikerComponent', () => {
  let component: CarnetBikerComponent;
  let fixture: ComponentFixture<CarnetBikerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnetBikerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarnetBikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
