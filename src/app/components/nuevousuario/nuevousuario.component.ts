import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service'; // Asegúrate de ajustar la ruta según tu estructura

@Component({
  selector: 'app-nuevousuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent {
  nuevoUsuario: any = {}; // Objeto para capturar datos del nuevo usuario
  mensaje: string = ''; // Mensaje de retroalimentación para el usuario

  constructor(private usuarioService: UsuarioService) { }

  crearUsuario() {
    // Verificar que todos los campos estén completos
    if (!this.validarCampos()) {
      this.mensaje = 'Por favor, complete todos los campos.';
      return;
    }

    this.usuarioService.postUser(this.nuevoUsuario).subscribe(
      (response) => {
        this.mensaje = 'Usuario creado exitosamente: ' + this.nuevoUsuario.nombre;
        this.nuevoUsuario = {}; // Reinicia el formulario
      },
      (error) => {
        this.mensaje = 'Ocurrió un error al crear el usuario. Intente de nuevo.';
        console.error('Error al crear usuario:', error);
      }
    );
  }

  // Método para validar que no falten campos
  private validarCampos(): boolean {
    const camposRequeridos = [
      'id_usuario', 'nombre', 'apellido', 'id_ciudad',
      'direccion', 'id_tipo', 'email', 'telefono',
      'genero', 'contra'
    ];
    return camposRequeridos.every((campo) => this.nuevoUsuario[campo]);
  }
}
