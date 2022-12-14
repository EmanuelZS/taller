import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  crearUsuario(formData: RegisterForm) {
    
    return this.http.post(`$( base url )/usuarios`, formData)

  }

}
