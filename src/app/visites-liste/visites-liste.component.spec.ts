import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitesListeComponent } from './visites-liste.component';

describe('VisitesListeComponent', () => {
  let component: VisitesListeComponent;
  let fixture: ComponentFixture<VisitesListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitesListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
