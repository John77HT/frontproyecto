import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevousuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent {
  nuevoUsuario: any = {}; // Objeto para el nuevo usuario

  crearUsuario() {
    console.log('Datos del nuevo usuario:', this.nuevoUsuario);
    alert('Usuario creado exitosamente: ' + JSON.stringify(this.nuevoUsuario));
    this.nuevoUsuario = {}; // Reinicia el formulario
  }
}
