/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AlbumDetailComponent } from './album-detail.component';
import { AlbumDetail } from '../album-detail';
import faker from '@faker-js/faker';
import { NgJoinPipeModule } from 'angular-pipes';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlbumDetailComponent', () => {
  let component: AlbumDetailComponent;
  let fixture: ComponentFixture<AlbumDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, NgJoinPipeModule, RouterTestingModule],
      declarations: [ AlbumDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailComponent);
    component = fixture.componentInstance;
    component.albumDetail = new AlbumDetail (
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      [], []
    );
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.albumDetail.titulo
    );
  });

});
