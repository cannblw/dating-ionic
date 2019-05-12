import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  findById(id: number): Observable<Profile> {
    // TODO: Load from service
    return of({
      id,
      name: 'Edgar Chirivella',
      birthday: '1995-03-28',
      photos: [
        // Do not show max-line-len errors on mock
        /* tslint:disable */
        { id: 1, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 2, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 3, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 4, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 5, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 6, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' }
        /* tslint:enable */
      ]
    });
  }
}
