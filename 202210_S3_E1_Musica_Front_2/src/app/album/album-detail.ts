import { Cancion } from "../cancion/cancion";
import { Creador } from "../creador/creador";
import { Album } from "./album";

export class AlbumDetail extends Album{
  artistas: Array<Creador> = [];
  canciones: Array<Cancion> = [];
  constructor(id: number, titulo: string, imagen:string, artistas:Array<Creador>, canciones:Array<Cancion>) {
    super(id, titulo, imagen);
      this.artistas = artistas.sort((a1, a2) => a1.id - a2.id);
      this.canciones = canciones;
  }

}
