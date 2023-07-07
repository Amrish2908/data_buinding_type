import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiObserComponent } from './promi-obser.component';

describe('PromiObserComponent', () => {
  let component: PromiObserComponent;
  let fixture: ComponentFixture<PromiObserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiObserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiObserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
