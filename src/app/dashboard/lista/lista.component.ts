import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregaElementoComponent } from '../dialogs/agrega-elemento.component';
import { BorraTablaComponent } from '../dialogs/borra-tabla.component';
import { EditaTituloComponent } from '../dialogs/edita-titulo.component';
import { EditaComponent } from '../dialogs/edita.component';
import { Lista, Elemento} from '../modelos.interface'
import { TablaService } from '../tabla.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() lista!: Lista

  constructor(private tablaServicio: TablaService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
   
  }

  borraTabla(){
    const dialogRef = this.dialog.open(BorraTablaComponent,{
      data: this.lista.titulo
    })

    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.tablaServicio.deleteTabla(this.lista.docRef!)
      }
    })
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

  eliminaElemento(index: number){
    this.lista.elementos?.splice(index, 1)
    this.tablaServicio.actualizaArrElementos(this.lista.docRef!, this.lista.elementos!)
  }

  editaElemento(index: number){
    const dialogRef = this.dialog.open(EditaComponent, {
      data: {
        ...this.lista.elementos![index]
      }
    })
    
    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.lista.elementos?.splice(index, 1, res)
        this.tablaServicio.actualizaArrElementos(this.lista.docRef!, this.lista.elementos!)
      }
    })
  }

  editaTitulo(){
    const dialogRef = this.dialog.open(EditaTituloComponent, {
      data: {},
    })

    dialogRef.afterClosed().subscribe((res)=>{
      if(res){
        this.lista.titulo = res
        this.tablaServicio.actualizaTitulo(this.lista.docRef!, res)
      }
    })
  }

  suelta(event: CdkDragDrop<string[]>){
    moveItemInArray(this.lista.elementos!, event.previousIndex, event.currentIndex)
    this.tablaServicio.actualizaArrElementos(this.lista.docRef!, this.lista.elementos!)
  }

  cambioElCheck(){
    this.tablaServicio.actualizaArrElementos(this.lista.docRef!, this.lista.elementos!)
  }

}
