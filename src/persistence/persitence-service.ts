import mongoClient from "mongodb";

const mongoUrl = "mongodb://localhost:27017";
const mongoDb = "artistpagedb";
const artistCollection = "artists";

class PersistenceService {
  initialize() {
    mongoClient.connect(mongoUrl, (err, db) => {
      if (err) throw err;
      var dbo = db.db(mongoDb);
      dbo.createCollection("artists", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
    });
  }

  createArtist(artist: Artist) {
    mongoClient.connect(mongoUrl, (err, db) => {
      if (err) throw err;
      var dbo = db.db(mongoDb);
      dbo.collection(artistCollection).insertOne(artist, (err, res) => {
        if (err) throw err;
        console.log("artist created");
        db.close();
      });
    });
  }
}

export const persistenceService: PersistenceService = new PersistenceService();
