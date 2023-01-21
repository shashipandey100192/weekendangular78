import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBootstrapComponent } from './simple-bootstrap.component';

describe('SimpleBootstrapComponent', () => {
  let component: SimpleBootstrapComponent;
  let fixture: ComponentFixture<SimpleBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
