import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsListeComponent } from './medecins-liste.component';

describe('MedecinsListeComponent', () => {
  let component: MedecinsListeComponent;
  let fixture: ComponentFixture<MedecinsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
