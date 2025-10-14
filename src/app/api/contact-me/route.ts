import { addMessageToDB, MessageContent } from "@/lib/dbHelper";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    if (data && Object.values(data).some((item) => !item)) {
      return Response.json({ message: "Wrong Data" }, { status: 400 });
    }
    const message = await addMessageToDB(data as MessageContent);
    return Response.json({ message: message.message });
  } catch {
    return Response.json({ message: "Wrong Data" }, { status: 400 });
  }
};
