import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Settings {
  rootSize: number;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private fireStore: AngularFirestore) { }

  getRootSize(): Observable<Settings> {
    return this.fireStore.collection('settings').valueChanges().pipe(map(res => res[0] as Settings));
  }

  setRootSize(rootSize: number): Promise<void> {
    return this.fireStore.collection('settings').doc('pC9rTKJahYLJz0QKQQZV').update({ rootSize: rootSize });
  }
}
