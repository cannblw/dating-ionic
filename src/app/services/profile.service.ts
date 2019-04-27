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
      birthday: '1995-03-28'
    });
  }
}
