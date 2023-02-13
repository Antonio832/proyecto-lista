import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.scss']
})
export class ElementoComponent implements OnInit {

  constructor() { }

  @Input() elemento: any

  @Input() index!: number

  @Output() checkChange = new EventEmitter<number>()

  @Output() deleteItem = new EventEmitter<number>()
  @Output() updateItem = new EventEmitter<number>()

  ngOnInit(): void {
    console.log(this.elemento)
  }

  onCheckChange(){
    this.checkChange.emit()
  }

  eliminaElemento(){
    this.deleteItem.emit(this.index)
  }

  editaElemento(){
    this.updateItem.emit(this.index)
  }

}
