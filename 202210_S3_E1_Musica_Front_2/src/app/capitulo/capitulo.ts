import { Podcast } from "../podcast/podcast";

export class Capitulo {
  public constructor(public id: number, public titulo: string, public imagen: string, public duracion: number, public fechaPublicacion: Date, public podcast: Podcast) {
  }
}
