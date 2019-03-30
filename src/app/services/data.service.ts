import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { firestore } from 'firebase/';
import { Works } from '../models/works';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ref = firebase.firestore().collection('works');

  getData(): Observable<any> {
    return new Observable(observer => {
      this.ref.onSnapshot(querySnapshot => {
        const trabajoList: Works[] = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          trabajoList.push({
            empleadorasid: data.empleadorasid,
            descripcion: data.descripcion,
            telefono: data.telefono,
            ubicacion: data.ubicacion,
            estado: data.estado
          });
        });
        observer.next(trabajoList);
      });
    });
  }

  constructor() {}
}
