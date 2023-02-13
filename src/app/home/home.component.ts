import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  angular = false
  material = false
  firebase = false

  listData = [
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'Firebase & Firestore',
      value: 'firebase'
    },
    {
      label: 'SaSS & Material',
      value: 'material'
    },
  ]

  prioridades = [
    'Curso Personalizado',
    'Clases grabadas',
    'Resolucion  de dudas 24/7',
    'Recursos para repasar',
  ]

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe((usr)=>{
      console.log(usr)
    })
  }

  toggleImg(valueImg: string){
    switch(valueImg){
      case 'firebase':
        this.firebase = !this.firebase
        break
      case 'angular':
        this.angular = !this.angular
        break
      case 'material':
        this.material = !this.material
        break
    }
  }

  suelta(evento: CdkDragDrop<string[]>){
    moveItemInArray(this.prioridades, evento.previousIndex, evento.currentIndex)
  }

}
