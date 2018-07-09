import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import User from "../models/user";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const firebaseUser = firebase.auth().currentUser;

class ApiService {

  static currentUser : User = firebaseUser ? new User(
    firebaseUser.uid,
    firebaseUser.displayName,
    firebaseUser.email
  ) : null;
  static auth : CloudAuth = firebase.auth();
  static database : CloudDB = firebase.firestore();

  collection(path: string) : CollectionRef {
    return ApiService.database.collection(path);
  }

  doc(path: string) : DocRef {
    return ApiService.database.doc(path);
  }

  get(path: string) : Promise<DBObject> {
    return new Promise<DBObject>((resolve, reject) => {
      const docRef : DocRef = ApiService.database.doc(path);
      const request : Promise<DocumentSnapshot> = docRef.get();

      request.then((snapshot : DocumentSnapshot) => {
        const dbObject : DBObject = {
          id: docRef.id,
          ref: docRef,
          data: snapshot.data(),
        };
        return dbObject;
      });
    });
  }

  create(collection: string, params: object) : Promise<DBObject> {
    return new Promise<DBObject>((resolve, reject) => {
      const request : Promise<DocRef> = this.collection(collection).add(params);

      request.then((docRef) => {
        const dbObject : DBObject = {
          id: docRef.id,
          ref: docRef,
          data: params
        };
        resolve(dbObject);
      }).catch(reject);
    });
  }

  update(path: string, params: object) : Promise<DBObject> {
    return new Promise<DBObject>((resolve, reject) => {
      const docRef : DocRef = this.doc(path);
      const updateRequest : Promise<void> = docRef.update(params);

      updateRequest
        .then(() => docRef.get())
        .then((snapshot : DocumentSnapshot) => {

          const dbObject : DBObject = {
            id: docRef.id,
            ref: docRef,
            data: snapshot.data(),
          }

          resolve(dbObject);
        });
    });
  }

  delete(path: string) : Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const docRef : DocRef = this.doc(path);
      docRef.delete().then(resolve).catch(reject);
    });
  }

  subscribeToQuery(collection: string, queries: DBWhereClause[], callback: (snapshot : QuerySnapshot) => void) : CollectionUnsubscribe {
    let collectionRef : CollectionRef | DbQuery = this.collection(collection);

    if (queries.length > 0) {
      queries.forEach((query : DBWhereClause) => {
        collectionRef = collectionRef.where(query[0], query[1], query[2]);
      });
    }

    return collectionRef.onSnapshot(callback);
  }
}

export default ApiService;