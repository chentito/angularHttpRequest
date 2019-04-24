import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmxListadoComponent } from './fmx-listado.component';

describe('FmxListadoComponent', () => {
  let component: FmxListadoComponent;
  let fixture: ComponentFixture<FmxListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmxListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmxListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
