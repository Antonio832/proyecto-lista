import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggListaComponent } from './agg-lista.component';

describe('AggListaComponent', () => {
  let component: AggListaComponent;
  let fixture: ComponentFixture<AggListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AggListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
