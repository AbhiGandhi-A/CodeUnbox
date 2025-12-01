import { MongoClient, type Db } from "mongodb"

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase() {
  const mongoUri = process.env.MONGODB_URI

  if (!mongoUri || mongoUri.includes("your_mongodb_connection_string")) {
    console.warn("[MongoDB] MongoDB URI not configured. Using mock mode for development.")
    // Return a mock object for development when no valid URI is provided
    return {
      client: null,
      db: {
        collection: () => ({
          findOne: async () => null,
          insertOne: async () => ({ insertedId: "mock-id" }),
          updateOne: async () => ({}),
          deleteOne: async () => ({}),
          find: () => ({ toArray: async () => [] }),
        }),
      } as any,
    }
  }

  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  try {
    const client = new MongoClient(mongoUri)
    await client.connect()
    const db = client.db("code-explorer")

    cachedClient = client
    cachedDb = db

    return { client, db }
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error)
    throw error
  }
}

export async function closeDatabase() {
  if (cachedClient) {
    await cachedClient.close()
    cachedClient = null
    cachedDb = null
  }
}
