import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ListasComponent } from './listas/listas.component';
import { ListaComponent } from './lista/lista.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card';
import { AggListaComponent } from './dialogs/agg-lista.component'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSliderModule } from '@angular/material/slider'
import { MatButtonToggleModule } from '@angular/material/button-toggle'

import { DragDropModule } from '@angular/cdk/drag-drop';
import { BorraTablaComponent } from './dialogs/borra-tabla.component';
import { AgregaElementoComponent } from './dialogs/agrega-elemento.component'
import { MatRippleModule } from '@angular/material/core'
import { MatMenuModule } from '@angular/material/menu';
import { EditaComponent } from './dialogs/edita.component';
import { ExpListaComponent } from './exp-lista/exp-lista.component';
import { ElementoComponent } from './elemento/elemento.component';
import { EditaTituloComponent } from './dialogs/edita-titulo.component'

@NgModule({
  declarations: [ListasComponent, ListaComponent, AggListaComponent, BorraTablaComponent, AgregaElementoComponent, EditaComponent, ExpListaComponent, ElementoComponent, EditaTituloComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatExpansionModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatRippleModule,
    MatMenuModule,
  ]
})
export class DashboardModule { }
