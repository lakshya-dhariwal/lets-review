import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("Cluster0");
  switch (req.method) {
    //Add a pdf to DB
    case "POST":
      let myPdf = await db.collection("pdfs").insertOne(req.body);
      res.json(myPdf);
      break;
    //get all pdfs
    case "GET":
      const allPdfs = await db.collection("pdfs").find({}).toArray();
      res.json({ status: 200, data: allPdfs });
      break;
    default:
      res.status(404).json({ name: "Route not found" });
  }
}
const getAllPdf = (req: NextApiRequest, res: NextApiResponse) => {};
