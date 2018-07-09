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

  static currentUser : User = firebaseUser ? new User({
    id: firebaseUser.uid,
    displayName: firebaseUser.displayName,
    email: firebaseUser.email
  }) : null;
  static auth : CloudAuth = firebase.auth();
  static database : CloudDB = firebase.firestore();

  collection(path: string) : CollectionRef {
    return ApiService.database.collection(path);
  }

  doc(path: string) : DocRef {
    return ApiService.database.doc(path);
  }

  get(path: string) : Promise<DbObject> {
    return new Promise<DbObject>((resolve, reject) => {
      const docRef : DocRef = ApiService.database.doc(path);
      const request : Promise<DocumentSnapshot> = docRef.get();

      request.then((snapshot : DocumentSnapshot) => {
        const dbObject : DbObject = {
          id: docRef.id,
          ref: docRef,
          data: snapshot.data(),
        };
        return dbObject;
      });
    });
  }

  create(collection: string, params: object) : Promise<DbObject> {
    return new Promise<DbObject>((resolve, reject) => {
      const request : Promise<DocRef> = this.collection(collection).add(params);

      request.then((docRef) => {
        const dbObject : DbObject = {
          id: docRef.id,
          ref: docRef,
          data: params
        };
        resolve(dbObject);
      }).catch(reject);
    });
  }

  update(path: string, params: object) : Promise<DbObject> {
    return new Promise<DbObject>((resolve, reject) => {
      const docRef : DocRef = this.doc(path);
      const updateRequest : Promise<void> = docRef.update(params);

      updateRequest
        .then(() => docRef.get())
        .then((snapshot : DocumentSnapshot) => {

          const dbObject : DbObject = {
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

  where(collection: string, where: DBWhereClause[]) : Promise<DbObject[]> {
    return new Promise<DbObject[]> ((resolve, reject) => {
      const query: DbQuery = this.query(collection, where);
      const request = query.get();

      request.then((results: QuerySnapshot) => {
        const dbObjects : DbObject[] = [];

        results.forEach((doc: QueryDocumentSnapshot) => {

          const dbObject : DbObject = {
            id: doc.id,
            ref: doc.ref,
            data: doc.data(),
          };

          dbObjects.push(dbObject);
        });

        resolve(dbObjects);
      }).catch(reject);
    });
  }

  subscribeToQuery(collection: string, where: DBWhereClause[], callback: (snapshot : QuerySnapshot) => void) : CollectionUnsubscribe {
    const query : DbQuery = this.query(collection, where);
    return query.onSnapshot(callback);
  }

  query(collection: string, where: DBWhereClause[]) : DbQuery {
    let collectionRef : CollectionRef | DbQuery = this.collection(collection);

    if (where.length > 0) {
      where.forEach((query : DBWhereClause) => {
        collectionRef = collectionRef.where(query[0], query[1], query[2]);
      });
    }

    return collectionRef;
  }
}

export default ApiService;