import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edita',
  template: `
    <div matDialogTitle>
      Editar {{data.tipo}}
    </div>

    <div matDialogContent class="cont">
      <mat-form-field>
        <mat-label>{{data.tipo}}</mat-label>
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

      <mat-slider 
        [min]="0"
        [max]="100"
        [step]="1" 
        [thumbLabel]="'' + data.prog"
        *ngIf="data.tipo == 'prog'"
        [(ngModel)]="data.prog"
      >
      </mat-slider>

      <mat-form-field appearance="outline">
        <mat-label>Color</mat-label>
        <input 
          matInput 
          [(ngModel)]="data.color" 
          type="color"
        >
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
        [mat-dialog-close]="data"
        [disabled]="!data.texto"
      >
        Actualizar
      </button>
    </div>
  `,
  styles: [`
      .cont{
        display: flex;
        flex-direction: column;
        gap: .5rem;
      }
    `
  ]
})
export class EditaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  cierra(){
    return this.dialogRef.close()
  }

}
