export class Album {
  id: number;
  titulo: string;
  imagen: string;

  constructor(id: number, titulo: string, imagen:string) {
    this.id = id;
    this.titulo = titulo;
    this.imagen = imagen;
  }
}
