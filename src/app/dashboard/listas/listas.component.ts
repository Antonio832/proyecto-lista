import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { AggListaComponent } from '../dialogs/agg-lista.component';
import { Lista } from '../modelos.interface';
import { TablaService } from '../tabla.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {

  listas: any[] = [
    
  ]

  constructor(public dialog: MatDialog, 
    private tablaServicio: TablaService,
    private afAuth: AngularFireAuth
  ) { }

  // Obteniendo las tablas
  ngOnInit(): void {
    // Obteniendo la instancia del usuario
    this.afAuth.user.subscribe(user=>{
      // Por si no hay usuario
      if(user){ // Si hay usuario, entonces
        // Hacemos llamada al servicio
        this.tablaServicio.getTablas(user.uid).onSnapshot(snap=>{
          // Recorremos todos los documentos 
          // y extraemos su informacion
          // para ponerla en la variable listas
          this.listas = snap.docs.map(doc=>{
            return {...doc.data(), docRef: doc.id}
          })
        })
      }else{ // si no hay usuario, entonces

      }
    })
  }

  agregar(){
    const dialogRef = this.dialog.open(AggListaComponent,{
      data: {},
    })
    
    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        this.tablaServicio.agregaTabla({
          titulo: res.texto,
          elementos: [],
          index: this.listas.length + 1
        })
      }
    })
  }

  suelta(event: CdkDragDrop<string[]>){
    moveItemInArray(this.listas, event.previousIndex, event.currentIndex)
    this.actualizaIndexes()
    this.tablaServicio.actualizaIndexes(this.listas)
  }

  actualizaIndexes(){
    for(let i = 0; i < this.listas.length; i++){
      this.listas[i].index = i + 1;
    }
  }

}