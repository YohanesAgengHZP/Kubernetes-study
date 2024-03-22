const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://root:example@localhost:27017';

// Database Name
const dbName = 'test';

async function main() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Select the database
    const db = client.db(dbName);

    // Perform a test query
    const result = await db.collection('testCollection').findOne({});
    console.log('Test query result:', result);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

main().catch(console.error);
