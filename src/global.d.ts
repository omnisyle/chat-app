type DbObject = {
  id: string,
  ref: firebase.firestore.DocumentReference,
  data: {
    [key: string]: any
  }
};

type CloudDB = firebase.firestore.Firestore;
type DocRef = firebase.firestore.DocumentReference;
type CollectionRef = firebase.firestore.CollectionReference;
type CloudAuth = firebase.auth.Auth;
type AuthUnsubscribe = firebase.Unsubscribe;
type CollectionUnsubscribe = firebase.Unsubscribe;
type DbQuery = firebase.firestore.Query;
type QuerySnapshot = firebase.firestore.QuerySnapshot;
type QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
type DocumentSnapshot = firebase.firestore.DocumentSnapshot;

declare enum WhereOperator {
  EQUAL = "==",
  LESS_THAN = "<",
  LESS_THAN_OR_EQUAL_TO = "<=",
  GREATER_THAN = ">",
  GREATER_THAN_OR_EQUAL_TO = ">="
}

type DBWhereClause = [string, WhereOperator , string]

declare class User {
  id: string;
  displayName: string;
  email: string;

  constructor(id: string, displayName: string, email: string)
}