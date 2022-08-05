/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PodcastDetailComponent } from './podcast-detail.component';
import { Podcast } from '../podcast';
import faker from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Capitulo } from 'src/app/capitulo/capitulo';
import { Creador } from 'src/app/creador/creador';
import { PodcastDetail } from '../podcast-detail';
import { RouterTestingModule } from '@angular/router/testing';

describe('PodcastDetailComponent', () => {
  let component: PodcastDetailComponent;
  let fixture: ComponentFixture<PodcastDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ PodcastDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastDetailComponent);
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

    component.podcastDetail = podcastDetail;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the podcast title', () => {
    const title = debug.query(By.css('h2')).nativeElement.textContent;
    expect(title).toBe(component.podcastDetail.titulo);
  });

  it('should have an image', () => {
    expect(debug.query(By.css('img'))).toBeTruthy();
  });

  it('should have a list of capitulos', () => {
    expect(debug.query(By.css('app-capitulo-list'))).toBeTruthy();
  });

  it('should have a list of creadores', () => {
    expect(debug.query(By.css('h4'))).toBeTruthy();
  });

  it('should have a price', () => {
    expect(debug.query(By.css('h5')).nativeElement.textContent).toEqual(
      '$ ' + component.podcastDetail.precio.toString() + ' USD');
  });
});
