import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private rtr: Router, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe(user=>{
      if(user){
        this.rtr.navigate(['perfil'])
      }
    })
  }

}
