import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashinternalComponent } from './dashinternal.component';

describe('DashinternalComponent', () => {
  let component: DashinternalComponent;
  let fixture: ComponentFixture<DashinternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashinternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashinternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
