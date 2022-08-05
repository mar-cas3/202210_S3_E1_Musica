/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreadorDetailComponent } from './creador-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreadorService } from '../creador.service';
import { CreadorDetail } from '../creador-detail';
import faker from '@faker-js/faker';
import { Podcast } from 'src/app/podcast/podcast';
import { Album } from 'src/app/album/album';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('CreadorDetailComponent', () => {
  let component: CreadorDetailComponent;
  let fixture: ComponentFixture<CreadorDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CreadorDetailComponent],
      providers: [CreadorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorDetailComponent);
    component = fixture.componentInstance;

    let podcast = new Podcast(faker.datatype.number(),
      faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(),
      faker.lorem.sentence(), faker.datatype.number()
    );

    let album = new Album(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl()
    );

    let creador = new CreadorDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      [album],
      [podcast]
    );

    component.creadorDetail = creador;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the creador name', () => {
    const creadorName = debug.query(By.css('h2')).nativeElement.textContent;
    expect(creadorName).toBe(component.creadorDetail.nombre);
  });

  it('should have a podcasts tag', () => {
    const podcasts = debug.queryAll(By.css('h3'))[1].nativeElement.textContent;
    expect(podcasts).toBe('Podcasts');
  });

  it('should have a albums tag', () => {
    const albums = debug.queryAll(By.css('h3'))[0].nativeElement.textContent;
    expect(albums).toBe('Albums');
  });

  it('should have a list of podcasts', () => {
    expect(component.creadorDetail.podcasts.length).toBe(1);
  });

  it('should have a list of albums', () => {
    expect(component.creadorDetail.albumes.length).toBe(1);
  });

  it('should have an img element ', () => {
    expect(debug.query(By.css('img'))).toBeTruthy();
  });

});
