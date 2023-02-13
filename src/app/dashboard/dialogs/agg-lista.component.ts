import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agg-lista',
  template: `
    <div matDialogTitle>
      Agregar una nueva lista
    </div>
    <div matDialogContent>
      <mat-form-field>
        <mat-label>Titulo</mat-label>
        <input matInput #input maxlength="15" type="text" autocomplete="off" [(ngModel)]="data.texto"/>
        <mat-hint align="end">{{ input.value?.length || 0 }}/15</mat-hint>
      </mat-form-field>
    </div>
    <div matDialogActions>
      <button mat-stroked-button [color]="'warn'" (click)="cierra()">Cancelar</button>
      <button mat-raised-button [mat-dialog-close]="data">Agregar</button>
    </div>
  `,
  styles: [`
      
    `
  ]
})
export class AggListaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AggListaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  cierra(){
    this.dialogRef.close()
  }

}
