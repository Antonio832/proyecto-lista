import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edita-titulo',
  template: `
    <div matDialogTitle>
      Edita el titulo
    </div>
    <div matDialogContent>
      <mat-form-field>
        <mat-label>Titulo</mat-label>
        <input 
          matInput
          #input
          maxlength="15"
          type="text"
          autocomplete="off"
          [(ngModel)]="data.texto"
        />
        <mat-hint align="end">{{ input.value?.length || 0 }}/15</mat-hint>
      </mat-form-field>
    </div>
    <div matDialogActions>
      <button 
        mat-stroked-button
        (click)="cierra()"
      >
        Cancelar
      </button>

      <button 
        mat-raised-button
        [mat-dialog-close]="data.texto"
        [disabled]="!data.texto"
      >
        Actualizar
      </button>
    </div>
  `,
  styles: [
  ]
})
export class EditaTituloComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditaTituloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  cierra(){
    return this.dialogRef.close()
  }

}
