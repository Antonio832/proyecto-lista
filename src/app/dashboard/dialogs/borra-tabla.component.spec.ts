import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorraTablaComponent } from './borra-tabla.component';

describe('BorraTablaComponent', () => {
  let component: BorraTablaComponent;
  let fixture: ComponentFixture<BorraTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorraTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorraTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
