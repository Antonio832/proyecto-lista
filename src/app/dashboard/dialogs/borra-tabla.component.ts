import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-borra-tabla',
  template: `
    <div matDialogTitle>
      Eliminar tabla {{titulo}}
    </div>
    <div matDialogActions>
      <button mat-stroked-button (click)="cierra()">Cancelar</button>
      <button mat-raised-button [color]="'warn'" [mat-dialog-close]="true">Eliminar</button>
    </div>
  `,
  styles: [
  ]
})
export class BorraTablaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BorraTablaComponent>,
    @Inject(MAT_DIALOG_DATA) public titulo: string
  ) { }

  ngOnInit(): void {
  }

  cierra(){
    this.dialogRef.close()
  }

}
