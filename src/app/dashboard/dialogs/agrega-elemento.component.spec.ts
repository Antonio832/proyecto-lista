import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaElementoComponent } from './agrega-elemento.component';

describe('AgregaElementoComponent', () => {
  let component: AgregaElementoComponent;
  let fixture: ComponentFixture<AgregaElementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaElementoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
