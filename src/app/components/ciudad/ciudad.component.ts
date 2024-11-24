import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CiudadService } from '../../services/ciudad.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-ciudad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  ciudades: any[] = []; // Lista dinámica de ciudades
  mensaje: string = ''; // Mensaje para feedback del usuario

  constructor(private router: Router, private ciudadService: CiudadService) {}

  ngOnInit(): void {
    this.obtenerCiudades();
  }

  obtenerCiudades(): void {
    this.ciudadService.fetchCiudad().subscribe(
      (data) => {
        this.ciudades = data;
      },
      (error) => {
        console.error('Error al obtener las ciudades:', error);
        this.mensaje = 'Error al cargar las ciudades.';
      }
    );
  }

  editarCiudad(id_ciudad: string): void {
    this.router.navigate(['/editar-ciudad', id_ciudad]); // Redirige a la ruta de edición
  }

  eliminarCiudad(id_ciudad: string): void {
    this.ciudadService.deleteCiudad(id_ciudad).subscribe(
      () => {
        this.ciudades = this.ciudades.filter(ciudad => ciudad.id_ciudad !== id_ciudad); // Actualiza la lista
        this.mensaje = `Ciudad con ID ${id_ciudad} eliminada exitosamente.`;
      },
      (error) => {
        console.error('Error al eliminar la ciudad:', error);
        this.mensaje = 'No se pudo eliminar la ciudad.';
      }
    );
  }

  irANuevaCiudad(): void {
    this.router.navigate(['/nuevaciudad']); // Redirige a la página de creación
  }
}
