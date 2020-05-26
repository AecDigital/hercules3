export class UserCountryProduct {
  idUsuario: string
	idProvincia: number;
	idProducto: number
}

export class User {
  idUsario: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  rol: number;
  telefono: string;
  email: string;
  activo: boolean;
  fBaja: Date;
  idUsuarioBaja: number;
  ambito: Array<UserCountryProduct>;
}
