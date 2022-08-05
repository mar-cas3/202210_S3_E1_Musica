import { Capitulo } from "../capitulo/capitulo";
import { Creador } from "../creador/creador";
import { Podcast } from "./podcast";

export class PodcastDetail extends Podcast {
  public constructor(public id: number, public titulo: string, public calificacion: string, public imagen: string, public descripcion: string, public precio: number, public capitulos: Array<Capitulo>, public creadores : Array<Creador>) {
    super(id, titulo, calificacion, imagen, descripcion, precio);
  }
}
