import { MongoClient, ServerApiVersion } from "mongodb";
import { Elsie } from "next/font/google";
const uri =
  "mongodb+srv://souravlayek:sDcR1eDwHNh3Jv0E@portfolio-v3.tjqbd.mongodb.net/?retryWrites=true&w=majority&appName=portfolio-v3";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export type MessageContent = {
  name: string;
  email: string;
  note: string;
};
export const addMessageToDB = async (
  content: MessageContent,
): Promise<{
  message: string;
}> => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const exist = await client
      .db("portfolio")
      .collection("messages")
      .findOne({ email: content.email });
    if (!exist) {
      await client
        .db("portfolio")
        .collection("messages")
        .insertOne({ ...content, createdAt: Date.now() });
      return {
        message: "I got your enquery. Thanks for reaching out.",
      };
    } else {
      await client
        .db("portfolio")
        .collection("messages")
        .findOneAndReplace(
          { email: content.email },
          { ...content, createdAt: Date.now() },
        );
      return {
        message: "Your enquery is updated now, Thanks for reaching out again.",
      };
    }
  } finally {
    await client.close();
  }
};
