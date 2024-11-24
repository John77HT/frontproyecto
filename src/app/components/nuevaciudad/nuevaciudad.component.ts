import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CiudadService } from '../../services/ciudad.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-nuevaciudad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevaciudad.component.html',
  styleUrls: ['./nuevaciudad.component.css']
})
export class NuevaciudadComponent {
  nuevaCiudad: any = { id_ciudad: '', nombre: '' }; // Objeto para el nuevo registro
  mensaje: string = ''; // Mensaje para feedback del usuario

  constructor(private ciudadService: CiudadService) {}

  crearCiudad(): void {
    if (!this.nuevaCiudad.id_ciudad || !this.nuevaCiudad.nombre) {
      this.mensaje = 'Por favor, complete todos los campos.';
      return;
    }

    this.ciudadService.postCiudad(this.nuevaCiudad).subscribe(
      (response) => {
        this.mensaje = 'Ciudad creada exitosamente: ' + this.nuevaCiudad.nombre;
        this.nuevaCiudad = { id_ciudad: '', nombre: '' }; // Reinicia el formulario
      },
      (error) => {
        this.mensaje = 'Ocurrió un error al crear la ciudad. Intente de nuevo.';
        console.error(error);
      }
    );
  }
}
