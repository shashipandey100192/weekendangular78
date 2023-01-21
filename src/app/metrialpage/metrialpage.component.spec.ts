import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetrialpageComponent } from './metrialpage.component';

describe('MetrialpageComponent', () => {
  let component: MetrialpageComponent;
  let fixture: ComponentFixture<MetrialpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetrialpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetrialpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
