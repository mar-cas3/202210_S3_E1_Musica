/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreadorListComponent } from './creador-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import faker from '@faker-js/faker';
import { CreadorDetail } from '../creador-detail';
import { Podcast } from 'src/app/podcast/podcast';

describe('CreadorListComponent', () => {
  let component: CreadorListComponent;
  let fixture: ComponentFixture<CreadorListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ CreadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorListComponent);
    component = fixture.componentInstance;

    let podcast = new Podcast(faker.datatype.number(),
      faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(),
      faker.lorem.sentence(), faker.datatype.number()
    );

    let creador = new CreadorDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      [],
      [podcast]
    );

    component.creadores = [creador];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of creadores', () => {
    expect(component.creadores.length).toBe(1);
  });

  it('should have an img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.creadores[0].nombre
   );
  });

  it('should have 2 h3 tags', () => {
    expect(debug.queryAll(By.css('h3')).length).toBe(2);
  });

  it('shoudl have an artists tag', () => {
    expect(debug.queryAll(By.css('h3'))[0].nativeElement.textContent).toContain(
      'Artistas'
    );
  });

  it('shoudl have an authors tag', () => {
    expect(debug.queryAll(By.css('h3'))[1].nativeElement.textContent).toContain(
      'Autores'
    );
  });
});
