import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmPlatosComponent } from './frm-platos.component';

describe('FrmPlatosComponent', () => {
  let component: FrmPlatosComponent;
  let fixture: ComponentFixture<FrmPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmPlatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
