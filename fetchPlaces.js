const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('./../Downloads/yorld-dev-376cd-firebase-adminsdk-n29nj-6d66d2b6e3.json');

(async () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:
      'https://yorld-dev-376cd-default-rtdb.europe-west1.firebasedatabase.app',
  });

  const db = admin.firestore();

  const snapshot = await db.collection('places-test').get();
  let fetchedPlaces = [];
  snapshot.forEach(doc => {
    fetchedPlaces.push(doc.data());
  });
  fs.writeFile('data.json', JSON.stringify(fetchedPlaces), err => {
    if (err) {
      return console.log(err);
    }
  });
})();
