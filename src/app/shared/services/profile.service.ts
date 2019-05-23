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
    // TODO: Do not show max-line-len errors on mock
    /* tslint:disable */
    return of({
      id,
      name: 'Sofía',
      surname: 'Test',
      birthday: '1995-03-28',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in mattis enim. Maecenas fringilla, odio non mattis ultrices, diam ex rutrum mauris, molestie sagittis urna quam id sem. Sed eget ornare lacus. Nunc aliquet sit amet purus sit amet euismod. Proin justo turpis, rutrum ac eros in, porttitor vulputate dolor. Nunc molestie purus urna, malesuada varius metus malesuada non. Sed vel magna sit amet tellus rhoncus lacinia. Duis vitae aliquam erat. Phasellus et dolor at magna cursus malesuada lacinia a turpis.',
      shortDescription: 'Me gusta leer :)',
      photos: [
        { id: 1, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 2, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 3, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 4, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 5, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 6, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' }
      ]
    });
    /* tslint:enable */
  }

  findNearby(): Observable<Profile[]> {
    /* tslint:disable */
    const profile: Profile = {
      id: 1,
      name: 'Sofía',
      surname: 'Test',
      birthday: '1995-03-28',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in mattis enim. Maecenas fringilla, odio non mattis ultrices, diam ex rutrum mauris, molestie sagittis urna quam id sem. Sed eget ornare lacus. Nunc aliquet sit amet purus sit amet euismod. Proin justo turpis, rutrum ac eros in, porttitor vulputate dolor. Nunc molestie purus urna, malesuada varius metus malesuada non. Sed vel magna sit amet tellus rhoncus lacinia. Duis vitae aliquam erat. Phasellus et dolor at magna cursus malesuada lacinia a turpis.',
      shortDescription: 'Me gusta leer :) También me encantan los animales',
      photos: [
        { id: 1, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 2, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 3, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 4, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 5, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' },
        { id: 6, url: 'https://previews.123rf.com/images/brickrena/brickrena1512/brickrena151200006/49127133-sonriendo-hipster-girl-in-su%C3%A9ter-de-punto-beanie-sombrero-y-con-la-taza-en-las-manos-en-el-fondo-blanc.jpg' }
      ]
    };
    /* tslint:enable */

    const profiles: Profile[] = [];
    for (let i = 0; i < 20; ++i) {
      profiles.push(profile);
    }
    return of(profiles);
  }

  editProfile(profile: Profile): Observable<any> {
    return of({});
  }
}
