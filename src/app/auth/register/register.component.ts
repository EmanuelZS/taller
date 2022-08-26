import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormControl } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css']
})
export class RegisterComponent  {

  

  public formSubmitted = false;

  public registerForm: FormGroup = new FormGroup({
    nombre: new FormControl ('Manuel', [ Validators.required, Validators.minLength(2) ]),
    email: new FormControl ('Popy@popy', [ Validators.required, Validators.email ]),
    password: new FormControl ('12345', [ Validators.required, Validators.minLength(5) ]),
    password2: new FormControl ('54321', [ Validators.required, Validators.minLength(5) ]),
    terminos: new FormControl (false, Validators.requiredTrue)
  }, {
    validators: fnpasswordsIguales  
  }
  );

  constructor( private fb: FormBuilder,
                private usuarioService: UsuarioService) { }

  crearUsuario() {
    this.formSubmitted = true;
    console.log( this.registerForm.value );

    if ( this.registerForm.invalid ) {
      return;
    }

    //Realizar el posteo
    this.usuarioService.crearUsuario( this.registerForm.value)
        .subscribe( resp => {
            console.log('usuario creado')
            console.log(resp);
        }, (err) => {
          //Si sucede un error
          Swal.fire('Error', err.error.msg, 'error');
        } );


  }

  campoNoValido(campo: string): boolean {
    
      if ( this.registerForm.get(campo)?.invalid && this.formSubmitted) {
        return true;
      }else{
        return false;
      }
  }

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if ( (pass1 !== pass2) && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

 
}

export const fnpasswordsIguales: ValidatorFn = (control: AbstractControl):
    ValidationErrors | null => {
 
    const pass1Control = control.get('password');
    const pass2Control = control.get('password2');
 
 
    console.log(`pwd: ${pass1Control?.value}, pwd2: ${pass2Control?.value}`);
 
    if ((pass1Control != null || pass2Control) && pass1Control?.value !== pass2Control?.value) {
        pass2Control?.setErrors({
            contrasenasIguales: false,
            msg: 'Contraseñas no son iguales'
        })
    }
 
    return ((pass1Control != null || pass2Control) && pass1Control?.value !== pass2Control?.value) ? {
        contrasenasIguales: 'no es correcto',
        msg: 'Revisar validacion de contraseñas'
 
    } : null;
}
