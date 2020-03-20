import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentsListeComponent } from './medicaments-liste.component';

describe('MedicamentsListeComponent', () => {
  let component: MedicamentsListeComponent;
  let fixture: ComponentFixture<MedicamentsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
