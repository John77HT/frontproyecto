import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CiudadService {
  private apiUrl = 'https://backproyecto-ai3c.onrender.com/api/ciudades'; // URL base de tu API

  constructor(private http: HttpClient) { }

  // Obtener todas las ciudades
  fetchCiudad(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener una ciudad por ID
  fetchCiudadById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva ciudad
  postCiudad(ciudad: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, ciudad);
  }

  // Actualizar una ciudad
  updateCiudad(id_original: string, ciudad: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id_original}`, ciudad);
  }

  // Eliminar una ciudad
  deleteCiudad(id_ciudad: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id_ciudad}`);
  }
}
