import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmSitiosComponent } from './frm-sitios.component';

describe('FrmSitiosComponent', () => {
  let component: FrmSitiosComponent;
  let fixture: ComponentFixture<FrmSitiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmSitiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
