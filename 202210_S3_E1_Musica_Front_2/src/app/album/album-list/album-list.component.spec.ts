/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { AlbumListComponent } from './album-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AlbumService } from '../album.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AlbumDetail } from '../album-detail';
import { NgJoinPipeModule } from 'angular-pipes';


describe('AlbumListComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, NgJoinPipeModule],
      declarations: [ AlbumListComponent ],
      providers: [ AlbumService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumListComponent);
    component = fixture.componentInstance;


    component.albums = [
      new AlbumDetail(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        [],[]
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a img element ', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.albums[0].titulo
    );
  });

});
