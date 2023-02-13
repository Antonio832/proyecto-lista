import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agrega-elemento',
  template: `
    <div matDialogTitle>
      Agrega elemento
    </div>

    <div matDialogContent class="content">
      <mat-form-field appearance="outline">
        <mat-label>Tipo</mat-label> 
        <mat-select [(ngModel)]="data.tipo" (valueChange)="onSelectChange()">
          <mat-option value="texto">Texto</mat-option>
          <mat-option value="check">Check box</mat-option>
          <mat-option value="prog">Progress</mat-option>
        </mat-select>
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
        <mat-label>Texto</mat-label>
        <input 
          [disabled]="!data.tipo"
          matInput
          #input
          maxlength="15"
          type="text"
          autocomplete="off"
          (keydown.enter)="cierra(data)"
          [(ngModel)]="data.texto"
        />
        <mat-hint align="end">{{ input.value?.length || 0 }}/15</mat-hint>
      </mat-form-field>

      <mat-button-toggle-group 
        class="btnGroup" 
        [(ngModel)]="data.color"
        *ngIf="data.tipo"
      >
        <mat-button-toggle
          *ngFor="let color of colores"
          [value]="color"
        >
          <div
            class="color" 
            [style]="'--colorVar: ' + color + ';'"
          >
          </div>
        </mat-button-toggle>
      </mat-button-toggle-group>

      <p>❗El color del texto permanecera de color negro</p>
    </div>

    <div matDialogActions>
      <button 
        mat-stroked-button 
        [color]="'warn'"
        (click)="cierra()"
      >
        Cancelar
      </button>
      <button 
        mat-raised-button 
        [mat-dialog-close]="data"
        [disabled]="!data.texto"
      >
        Agregar
      </button>
    </div>
  `,
  styles: [`
      .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .btnGroup{
        margin-block: 1rem;
      }

      .color{
        width: 1rem; 
        aspect-ratio: 1;
        margin: .5rem;
        border-radius: 50%;
        background-color: var(--colorVar);
      }
    `
  ]
})
export class AgregaElementoComponent implements OnInit {

  colores: string[] = ['purple', 'blue', 'green', 'yellow', 'red', 'gray']

  constructor(
    public dialogRef: MatDialogRef<AgregaElementoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 

  }

  onSelectChange(){
    delete this.data.prog
  }

  ngOnInit(): void {
  }

  cierra(args?: any){
    if(!args) return this.dialogRef.close()
    return this.dialogRef.close(args)
  }
}
