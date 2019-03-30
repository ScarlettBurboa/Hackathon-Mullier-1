import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { firestore } from 'firebase/';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ref = firebase.firestore().collection('works');

  constructor() {}
}
