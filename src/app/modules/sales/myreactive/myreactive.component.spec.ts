import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreactiveComponent } from './myreactive.component';

describe('MyreactiveComponent', () => {
  let component: MyreactiveComponent;
  let fixture: ComponentFixture<MyreactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyreactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
