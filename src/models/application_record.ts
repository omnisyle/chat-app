import ApiService from "../services/api_service";

abstract class ApplicationRecord {
  static readonly _apiService : ApiService = new ApiService();

  private static mapDbObjectToRecord<T extends ApplicationRecord>(record : T, dbObject : DbObject) : T {
    const properties: string[] = Object.getOwnPropertyNames(record);

    record["id"] = dbObject.id;
    record["docRef"] = dbObject.ref;
    properties.forEach((property) => {
      if (dbObject.data.hasOwnProperty(property)) {
        record[property] = dbObject.data[property];
      }
    });

    return record;
  }

  static find<T extends ApplicationRecord>(this: (new () => T), id: string) : Promise<T>{
    return new Promise<T> ((resolve, reject) => {
      const pathName = `${ this["_collectionName"] }/${ this["id"] }`;
      const request = ApplicationRecord._apiService.get(pathName);

      request.then((dbObject: DbObject) => {
        const record : T = new this();
        resolve(ApplicationRecord.mapDbObjectToRecord(record, dbObject));
      }).catch(reject);
    });
  }

  static where<T extends ApplicationRecord>(this: (new () => T), where: DBWhereClause[]) : Promise<T[]>{
    return new Promise<T[]> ((resolve, reject) => {
      const pathName = `${ this["_collectionName"] }`;
      const request = ApplicationRecord._apiService.where(pathName, where);

      request.then((dbObjects: DbObject[]) => {

        const results = dbObjects.map((dbObject: DbObject) => {
          const record: T = new this();
          return ApplicationRecord.mapDbObjectToRecord(record, dbObject);
        });

        resolve(results);
      }).catch(reject);
    });
  }

  create<T extends ApplicationRecord>(this: (new () => T), params: any) : Promise<T> {
    return new Promise<T> ((resolve, reject) => {
      const request = ApplicationRecord._apiService.create(this["_collectionName"], params);

      request.then((dbObject: DbObject) => {
        const record : T = new this();
        resolve(ApplicationRecord.mapDbObjectToRecord(record, dbObject));
      }).catch(reject);
    });
  }

  update<T extends ApplicationRecord>(this: (new () => T), params: any) : Promise<T> {
    return new Promise<T> ((resolve, reject) => {
      const pathName = `${ this["_collectionName"] }/${ this["id"] }`;
      const request = ApplicationRecord._apiService.update(pathName, params);

      request.then((dbObject: DbObject) => {
        const record : T = new this();
        resolve(ApplicationRecord.mapDbObjectToRecord(record, dbObject));
      }).catch(reject);
    });
  }

  delete<T extends ApplicationRecord>(this: (new () => T)) : Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const pathName = `${ this["_collectionName"] }/${ this["id"] }`;
      const request = ApplicationRecord._apiService.delete(pathName);
      request.then(resolve).catch(reject);
    });
  }
}

export default ApplicationRecord;