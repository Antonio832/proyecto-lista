import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { Elemento, Lista } from './modelos.interface';

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  constructor(private db: AngularFirestore,
      private afAuth: AngularFireAuth
    ) { }

  
  async agregaTabla(tabla: Lista){
    const user = await this.afAuth.currentUser

    if(!user) return

    return this.db.collection("tablas").add({
      ...tabla,
      uid: user.uid,
      fecha: firebase.firestore.Timestamp.fromDate(new Date()),
    })
  }

  getTablas(uid: string){
    return this.db.firestore.collection('tablas')
    .where('uid', '==', uid).orderBy("index", "asc")
  }

  actualizaIndexes(listas: Lista[]){
    for(let lista of listas){
      this.db.collection('tablas').doc(lista.docRef).update({index: lista.index})
    }
  }

  deleteTabla(docRef: string){
    return this.db.collection('tablas').doc(docRef).delete()
  }

  agregaElementoTabla(docRef: string, elemento: any){
    return this.db.collection('tablas').doc(docRef).update({
      elementos: firebase.firestore.FieldValue.arrayUnion(elemento)
    })
  }

  actualizaArrElementos(docRef: string, arr: Elemento[]){
    return this.db.collection('tablas').doc(docRef).update({
      elementos: arr
    })
  }

  actualizaTitulo(docRef: string, nuevoTitulo: string){
    return this.db.collection('tablas').doc(docRef).update({
      titulo: nuevoTitulo
    })
  }

}
