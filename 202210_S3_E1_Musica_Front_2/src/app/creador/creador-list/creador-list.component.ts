import { Component, OnInit } from '@angular/core';
import { CreadorDetail } from '../creador-detail';
import { CreadorService } from '../creador.service';

@Component({
  selector: 'app-creador-list',
  templateUrl: './creador-list.component.html',
  styleUrls: ['./creador-list.component.css']
})
export class CreadorListComponent implements OnInit {

  creadores: Array<CreadorDetail> = [];
  allCreadores: Array<CreadorDetail> = [];
  selected: boolean = false;
  selectedCreador!: CreadorDetail;
  searchText: any;

  constructor(private creadorService: CreadorService) { }

  getCreadores(): void {
    this.creadorService.getCreadores().subscribe(
      {
        next: creadores => { this.creadores = creadores; this.allCreadores = creadores; this.selectedCreador = this.creadores[0];},
        error: e => console.log(e)
    });
  }

  getArtistas(creadores:Array<CreadorDetail>):Array<CreadorDetail> {
    let artistas: Array<CreadorDetail> = [];
    // console.log(creadores);
    creadores.forEach((creador) => {
      // console.log(creador.albumes);
      if (creador.albumes.length != 0){
        artistas.push(creador)
      }
    });
    // console.log("artistas", artistas);
    return artistas;
  }

  getAutores(creadores:Array<CreadorDetail>):Array<CreadorDetail> {
    let autores: Array<CreadorDetail> = [];
    creadores.forEach((creador) => {
      // console.log(creador.albumes);
      if (creador.podcasts.length != 0){
        autores.push(creador)
      }
    });
    // console.log("autores", autores);
    return autores;
  }

  onSelected(creador: CreadorDetail): void {
    this.selectedCreador = creador;
    this.selected = true;
  }

  filterByCreatorName() {
    this.creadores = this.allCreadores.filter(elem => elem.nombre.toLowerCase().match(this.searchText.toLowerCase()));
  }

  sortAsc() {
    if(this.allCreadores != this.creadores) {
      this.creadores = this.creadores.sort((c1, c2) => c1.nombre.localeCompare(c2.nombre));
    } else {
      this.creadores = this.allCreadores.sort((c1, c2) => c1.nombre.localeCompare(c2.nombre));
    }

  }

  sortDesc() {
    if(this.allCreadores != this.creadores) {
      this.creadores = this.creadores.sort((c1,c2) => c2.nombre.localeCompare(c1.nombre));
    } else {
      this.creadores = this.allCreadores.sort((c1, c2) => c2.nombre.localeCompare(c1.nombre));
    }
  }

  ngOnInit() {
    this.getCreadores();
  }
}
