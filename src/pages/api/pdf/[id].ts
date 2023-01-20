import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/database";
import { ObjectId } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("Cluster0");
  const { id } = req.query;
  switch (req.method) {
    //get a single pdf
    case "GET":
      const pdf = await db
        .collection("pdfs")
        .findOne({ _id: new ObjectId(id as string) });
      res.json(pdf);
      break;
    // update a single pdf
    case "POST":
      const newPdf = await db
        .collection("pdfs")
        .findOneAndUpdate(
          { _id: new ObjectId(id as string) },
          { $set: { review: req.body.review, reviewed: true } }
        );
      res.json(newPdf);
    default:
      res.status(404).json({ name: "Route not found" });
  }
}
