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

  // getBoard(id: string): Observable<any> {
  //   return new Observable(observer => {
  //     this.ref
  //       .doc(id)
  //       .get()
  //       .then(doc => {
  //         const data = doc.data();
  //         observer.next({
  //           key: doc.id,
  //           title: data.title,
  //           description: data.description,
  //           author: data.author
  //         });
  //       });
  //   });
  // }

  // postBoards(data): Observable<any> {
  //   return new Observable(observer => {
  //     this.ref.add(data).then(doc => {
  //       observer.next({
  //         key: doc.id
  //       });
  //     });
  //   });
  // }

  // updateBoards(id: string, data): Observable<any> {
  //   return new Observable(observer => {
  //     this.ref
  //       .doc(id)
  //       .set(data)
  //       .then(() => {
  //         observer.next();
  //       });
  //   });
  // }

  // deleteBoards(id: string): Observable<{}> {
  //   return new Observable(observer => {
  //     this.ref
  //       .doc(id)
  //       .delete()
  //       .then(() => {
  //         observer.next();
  //       });
  //   });
  // }
  constructor() {}
}
