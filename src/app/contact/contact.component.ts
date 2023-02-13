import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  primerForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.primerForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.minLength(6), Validators.required])
    })

  }

  get email(){
    return this.primerForm.get('email')
  }

  get password(){
    return this.primerForm.get('password')
  }

  enviaForm(){
    return console.log(this.primerForm.value)
  }

  cancelarForm(){
    return this.primerForm.reset()
  }

  valorParaRadio: boolean | undefined

}
