import { Album } from "../album/album";
import { Podcast } from "../podcast/podcast";
import { Creador } from "./creador";

export class CreadorDetail extends Creador {

  public constructor(public id: number, public nombre: string, public nacionalidad: string, public imagen: string, public albumes: Array<Album>, public podcasts: Array<Podcast>) {
    super(id, nombre, nacionalidad, imagen);
  }
}
