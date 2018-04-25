import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanillaInspeccionIniComponent } from './planilla-inspeccion-ini.component';

describe('PlanillaInspeccionIniComponent', () => {
  let component: PlanillaInspeccionIniComponent;
  let fixture: ComponentFixture<PlanillaInspeccionIniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanillaInspeccionIniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanillaInspeccionIniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
