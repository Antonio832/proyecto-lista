import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpListaComponent } from './exp-lista.component';

describe('ExpListaComponent', () => {
  let component: ExpListaComponent;
  let fixture: ComponentFixture<ExpListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
