import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreadorDetail } from '../creador-detail';
import { CreadorService } from '../creador.service';

@Component({
  selector: 'app-creador-detail',
  templateUrl: './creador-detail.component.html',
  styleUrls: ['./creador-detail.component.css']
})
export class CreadorDetailComponent implements OnInit {

  creadorId!: number;
  @Input() creadorDetail!: CreadorDetail;

  constructor(private route: ActivatedRoute, private creadorService: CreadorService) { }

  getCreador() {
    this.creadorService.getCreador(this.creadorId).subscribe((creador) => {
      this.creadorDetail = creador;
    });
  }

  ngOnInit() {
    if(this.creadorDetail === undefined) {
      this.creadorId = +this.route.snapshot.paramMap.get('id')!;
      if(Number.isInteger(this.creadorId) && this.creadorId > 0) {
        if(this.creadorId) {
          this.getCreador();
        }
      }
    }
  }

}
