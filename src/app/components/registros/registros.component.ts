import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {}

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
      }
    );
  }

  // Eliminar un usuario
  eliminarUsuario(id_usuario: string): void {
    this.usuarioService.deleteUser(id_usuario).subscribe(
      () => {
        // Filtrar usuarios para actualizar la lista en el frontend
        this.usuarios = this.usuarios.filter(usuario => usuario.id_usuario !== id_usuario);
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }

  // Editar un usuario (Placeholder, implementación depende de la lógica del sistema)
  editarUsuario(id_usuario: string): void {
    // Aquí podrías redirigir a un formulario de edición o mostrar un modal
    console.log('Editar usuario con ID:', id_usuario);
    // Ejemplo: this.router.navigate(['/editar-usuario', id_usuario]);
  }

  // Ir a la página para crear un nuevo usuario (Placeholder)
  irANuevoUsuario(): void {
    // Aquí podrías redirigir a un formulario de registro
    console.log('Ir a la página para registrar un nuevo usuario');
    // Ejemplo: this.router.navigate(['/nuevo-usuario']);
  }
}
