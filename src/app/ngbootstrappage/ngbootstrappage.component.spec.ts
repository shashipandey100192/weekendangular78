import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbootstrappageComponent } from './ngbootstrappage.component';

describe('NgbootstrappageComponent', () => {
  let component: NgbootstrappageComponent;
  let fixture: ComponentFixture<NgbootstrappageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbootstrappageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbootstrappageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
