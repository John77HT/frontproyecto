import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'https://backproyecto-ai3c.onrender.com/api/usuarios'; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  fetchUser(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un usuario por ID
  fetchUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo usuario
  postUser(usuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }

  // Actualizar un usuario
  updateUser(id_original: string, usuario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id_original}`, usuario);
  }

  // Eliminar un usuario
  deleteUser(id_usuario: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id_usuario}`);
  }
}
