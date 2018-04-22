import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEstacionServicioComponent } from './menu-estacion-servicio.component';

describe('MenuEstacionServicioComponent', () => {
  let component: MenuEstacionServicioComponent;
  let fixture: ComponentFixture<MenuEstacionServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEstacionServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEstacionServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
