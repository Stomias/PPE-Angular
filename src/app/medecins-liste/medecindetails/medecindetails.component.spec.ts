import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecindetailsComponent } from './medecindetails.component';

describe('MedecindetailsComponent', () => {
  let component: MedecindetailsComponent;
  let fixture: ComponentFixture<MedecindetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecindetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
