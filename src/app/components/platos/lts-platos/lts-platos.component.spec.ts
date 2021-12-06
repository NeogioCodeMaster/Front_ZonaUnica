import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtsPlatosComponent } from './lts-platos.component';

describe('LtsPlatosComponent', () => {
  let component: LtsPlatosComponent;
  let fixture: ComponentFixture<LtsPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtsPlatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtsPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
