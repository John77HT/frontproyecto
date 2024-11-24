export class Usuario {
    id: number;
    nombre: string;
    apellido: string;
    idCiudad: number;
    direccion: string;
    idTipo: number;
    email: string;
    telefono: string;
    genero: string;
    contra: string;

    constructor(
        id: number = 0,
        nombre: string = "",
        apellido: string = "",
        idCiudad: number = 0,
        direccion: string = "",
        idTipo: number = 0,
        email: string = "",
        telefono: string = "",
        genero: string = "",
        contra: string = ""
    ) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.idCiudad = idCiudad;
        this.direccion = direccion;
        this.idTipo = idTipo;
        this.email = email;
        this.telefono = telefono;
        this.genero = genero;
        this.contra = contra;
    }
}
