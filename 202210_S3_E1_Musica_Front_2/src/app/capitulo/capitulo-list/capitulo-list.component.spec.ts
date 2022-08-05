/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CapituloListComponent } from './capitulo-list.component';
import faker from '@faker-js/faker';
import { Podcast } from 'src/app/podcast/podcast';
import { Capitulo } from '../capitulo';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CapituloListComponent', () => {
  let component: CapituloListComponent;
  let fixture: ComponentFixture<CapituloListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CapituloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapituloListComponent);
    component = fixture.componentInstance;

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

    component.capitulos = [capitulo];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of capitulos', () => {
    expect(component.capitulos.length).toBe(1);
  });

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.capitulos[0].titulo
   );
  });

  it('should have a capitulos tag', () => {
    expect(debug.query(By.css('h5')).nativeElement.textContent).toEqual(
      'Capitulos')
  });

  it('should have a title th', () => {
    expect(debug.queryAll(By.css('th'))[1].nativeElement.textContent).toEqual(
      'Titulo'
    );
  });

  it('should have a duration th', () => {
    expect(debug.queryAll(By.css('th'))[2].nativeElement.textContent).toEqual(
      'Duracion'
    );
  });

  it('should have a date th', () => {
    expect(debug.queryAll(By.css('th'))[3].nativeElement.textContent).toEqual(
      'Fecha Publicacion'
    );
  });

  it('should have a th element ', () => {
    expect(debug.queryAll(By.css('th'))).toBeTruthy();
  });

  it('should have a table element ', () => {
    expect(debug.query(By.css('table')).nativeElement.innerHTML).toContain(
      component.capitulos[0].titulo);
  });

  it('should have a tr element ', () => {
    expect(debug.query(By.css('tr'))).toBeTruthy();
  });

  it('should have a td element ', () => {
    expect(debug.query(By.css('td'))).toBeTruthy();
  });

});
