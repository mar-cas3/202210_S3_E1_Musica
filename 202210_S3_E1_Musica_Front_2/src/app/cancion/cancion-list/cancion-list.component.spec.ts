/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CancionListComponent } from './cancion-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CancionDetail } from '../cancion-detail';
import { CancionService } from '../cancion.service';

describe('CancionListComponent', () => {
  let component: CancionListComponent;
  let fixture: ComponentFixture<CancionListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ CancionListComponent ],
      providers: [ CancionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancionListComponent);
    component = fixture.componentInstance;


    component.canciones = [
      new CancionDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.number({
          min: 0,
          max: 3599
        }),
        []
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an row element ', () => {

    let tableRows = debug.queryAll(By.css('tr'));
    expect(tableRows.length).toBe(1);


    // Data rows
    let row1 = tableRows[0];
    let data = row1.queryAll(By.css('td'))
    expect(data.length).toBe(3);
    expect(+data[0].nativeElement.textContent).toBe(component.canciones[0].id);
    expect(data[1].nativeElement.textContent).toBe(component.canciones[0].titulo);
    let duracionData = data[2].nativeElement.textContent.split(":");
    let secondsData = (parseInt(duracionData[0], 10)* 60) + (parseInt(duracionData[1], 10));
    expect(secondsData).toBe(component.canciones[0].duracion);

  });

});
