import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private firestore: AngularFirestore) { }

  getsongs(x) {
    return this.firestore.collection('songs').doc('language').collection(x).snapshotChanges();
}
getsong(x){
  return this.firestore.collection('playlists').doc(x).collection('songs').snapshotChanges();

}

getartist(x){
  return this.firestore.collection('Artists').doc('language').collection(x).snapshotChanges();
}
getplaylist(x){
  return this.firestore.collection('playlists').snapshotChanges();
}
getgroup(x){
  return this.firestore.collection('Group').doc(x).collection('data').snapshotChanges();
}
}
