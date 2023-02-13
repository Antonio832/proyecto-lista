import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregaElementoComponent } from '../dialogs/agrega-elemento.component';
import { BorraTablaComponent } from '../dialogs/borra-tabla.component';
import { TablaService } from '../tabla.service';

@Component({
  selector: 'app-exp-lista',
  templateUrl: './exp-lista.component.html',
  styleUrls: ['./exp-lista.component.scss']
})
export class ExpListaComponent implements OnInit {

  constructor(public dialog: MatDialog, private tablaServicio: TablaService) { }

  @Input() lista: any

  ngOnInit(): void {
  }

  agregaElemento(){
    const dialogRef = this.dialog.open(AgregaElementoComponent,{
      data: {},
    })

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.tablaServicio.agregaElementoTabla(this.lista.docRef!, res)
      }
    })
  }

  suelta(event: CdkDragDrop<string[]>){
    moveItemInArray(this.lista.elementos!, event.previousIndex, event.currentIndex)
    this.tablaServicio.actualizaArrElementos(this.lista.docRef!, this.lista.elementos!)
  }

  editarTitulo(){

  }

  borrarTabla(){
    const dialogRef = this.dialog.open(BorraTablaComponent,{
      data: this.lista.titulo
    })

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.tablaServicio.deleteTabla(this.lista.docRef!)
      }
    })
  }

}
