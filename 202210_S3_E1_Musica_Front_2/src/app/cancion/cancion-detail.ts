import { Album } from "../album/album";
import { Cancion } from "./cancion";

export class CancionDetail extends Cancion {
  albumes: Array<Album>;

  constructor(id: number, titulo:string, duracion:number, albumes:Array<Album>) {
    super(id, titulo, duracion);
    this.albumes = albumes;
  }
}
