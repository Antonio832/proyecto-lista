import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  usrProfile: any

  constructor(private rtr: Router, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe(user => {
      if(!user){
        return this.rtr.navigate(['login'])
      }
      return this.usrProfile = user
    })
  }

  signOut(){
    return this.afAuth.signOut()
  }

}
