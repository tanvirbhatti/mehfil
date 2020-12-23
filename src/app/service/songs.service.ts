import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private firestore: AngularFirestore) { }

  getsongs() {
    return this.firestore.collection('songs').snapshotChanges();
}

getartist(){
  return this.firestore.collection('Artists').snapshotChanges();
}
}
