/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { AlbumPodcastComponent } from './album-podcast.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NgJoinPipeModule } from 'angular-pipes';


describe('AlbumListComponent', () => {
  let component: AlbumPodcastComponent;
  let fixture: ComponentFixture<AlbumPodcastComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, NgJoinPipeModule],
      declarations: [ AlbumPodcastComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPodcastComponent);
    component = fixture.componentInstance;


    // component.albums = [
    //   new AlbumDetail(
    //     faker.datatype.number(),
    //     faker.lorem.sentence(),
    //     faker.image.imageUrl(),
    //     [],[]
    //   ),
    // ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoudl have an albums tag', () => {
    expect(debug.queryAll(By.css('h2'))[0].nativeElement.textContent).toContain(
      'Albums'
    );
  });

  it('shoudl have an podcasts tag', () => {
    expect(debug.queryAll(By.css('h2'))[1].nativeElement.textContent).toContain(
      'Podcasts'
    );
  });

  it('shoudl have an album-list element tag', () => {
    expect(debug.queryAll(By.css('app-album-list'))[0]
    );
  });

  it('shoudl have an podcast-list element tag', () => {
    expect(debug.queryAll(By.css('app-podcast-list'))[0]
    );
  });


});
