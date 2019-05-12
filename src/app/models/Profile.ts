
import { Photo } from './Photo';

export interface Profile {
  id: number;
  name: string;
  birthday: string;

  photos: Photo[];
}
