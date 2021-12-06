import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmMunicipioComponent } from './frm-municipio.component';

describe('FrmMunicipioComponent', () => {
  let component: FrmMunicipioComponent;
  let fixture: ComponentFixture<FrmMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmMunicipioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
