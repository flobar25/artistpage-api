import { MongoClient, ObjectId, ObjectID } from "mongodb";

const mongoUrl = "mongodb://localhost:27017/artistpagedb"; //TODO dynamic properties
const dbName = "artistpagedb"; //TODO dynamic properties
const artistCollection = "artists"; //TODO dynamic properties

class PersistenceService {
  createArtist(artist: Artist): Promise<string> {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUrl)
        .then(client => {
          return client.db(dbName).collection(artistCollection);
        })
        .then(collection => {
          collection.insertOne(artist).then(result => {
            resolve(`${result.insertedId}`);
          });
        })
        .catch(err => reject(err));
    });
  }

  readArtist(id: string): any {
    return new Promise((resolve, reject) => {
      // mongo throws an error if the id is invalid, if the id is invalid it should be the same as an non existing artist from this api perspective
      if (ObjectID.isValid(id)) {
        MongoClient.connect(mongoUrl)
          .then(client => {
            return client.db(dbName).collection(artistCollection);
          })
          .then(collection => {
            collection.findOne({ _id: new ObjectId(id) }).then(result => {
              resolve(result);
            });
          })
          .catch(err => reject(err));
      } else {
        resolve();
      }
    });
  }

  readArtists() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(mongoUrl)
        .then(client => {
          return client.db(dbName).collection(artistCollection);
        })
        .then(collection => {
          collection
            .find({})
            .toArray()
            .then(result => {
              resolve(result);
            });
        })
        .catch(err => reject(err));
    });
  }
}

export const persistenceService: PersistenceService = new PersistenceService();
