import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtsMunicipioComponent } from './lts-municipio.component';

describe('LtsMunicipioComponent', () => {
  let component: LtsMunicipioComponent;
  let fixture: ComponentFixture<LtsMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtsMunicipioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtsMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
