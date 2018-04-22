import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspeccionInicialComponent } from './inspeccion-inicial.component';

describe('InspeccionInicialComponent', () => {
  let component: InspeccionInicialComponent;
  let fixture: ComponentFixture<InspeccionInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspeccionInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspeccionInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
