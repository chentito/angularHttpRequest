import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmxAltaComponent } from './fmx-alta.component';

describe('FmxAltaComponent', () => {
  let component: FmxAltaComponent;
  let fixture: ComponentFixture<FmxAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmxAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmxAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
