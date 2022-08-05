/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { faker } from '@faker-js/faker';

import { PodcastListComponent } from './podcast-list.component';
import { PodcastService } from '../podcast.service';
import { Capitulo } from 'src/app/capitulo/capitulo';
import { PodcastDetail } from '../podcast-detail';
import { Podcast } from '../podcast';
import { Creador } from 'src/app/creador/creador';

describe('PodcastListComponent', () => {
  let component: PodcastListComponent;
  let fixture: ComponentFixture<PodcastListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PodcastListComponent],
      providers: [PodcastService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastListComponent);
    component = fixture.componentInstance;

    let creador = new Creador(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );

    let podcast = new Podcast(faker.datatype.number(),
      faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(),
      faker.lorem.sentence(), faker.datatype.number()
    );

    let capitulo = new Capitulo(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.datatype.datetime(),
      podcast
    );

    let podcastDetail = new PodcastDetail(podcast.id,
      podcast.titulo,
      podcast.calificacion,
      podcast.imagen,
      podcast.descripcion,
      podcast.precio,
      [capitulo],
      [creador]
    );

    component.podcasts = [podcastDetail];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of podcasts', () => {
    expect(component.podcasts.length).toBe(1);
  });

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.podcasts[0].titulo
    );
  });
  it('should have a podcast title tag', () => {
    expect(debug.query(By.css('h5')).nativeElement.textContent).toEqual(
      component.podcasts[0].titulo
    );
  });
});
