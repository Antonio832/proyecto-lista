import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTituloComponent } from './edita-titulo.component';

describe('EditaTituloComponent', () => {
  let component: EditaTituloComponent;
  let fixture: ComponentFixture<EditaTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaTituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
