import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  usuarios: any[] = []; // Lista dinámica de usuarios
  mensaje: string = ''; // Mensaje para feedback del usuario

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  // Cargar todos los usuarios
  cargarUsuarios(): void {
    this.usuarioService.fetchUser().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.error('Error al cargar los usuarios:', error);
        this.mensaje = 'Error al cargar los usuarios.';
      }
    );
  }

  // Redirigir a la página de edición de un usuario
  editarUsuario(id_usuario: string): void {
    this.router.navigate(['/editar-usuario', id_usuario]);
  }

  // Eliminar un usuario
  eliminarUsuario(id_usuario: string): void {
    this.usuarioService.deleteUser(id_usuario).subscribe(
      () => {
        this.usuarios = this.usuarios.filter(usuario => usuario.id_usuario !== id_usuario);
        this.mensaje = `Usuario con ID ${id_usuario} eliminado exitosamente.`;
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
        this.mensaje = 'No se pudo eliminar el usuario.';
      }
    );
  }

  // Redirigir a la página para crear un nuevo usuario
  irANuevoUsuario(): void {
    this.router.navigate(['/nuevo-usuario']);
  }
}
