import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

 ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      
    });
  }

Enviar(){  
  console.log(this.formulario)
}
}
