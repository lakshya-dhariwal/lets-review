import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/database";

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
      const pdf = await db.collection("pdfs").find({ _id: id });
      res.json(pdf);
    //update a single pdf
    case "POST":
      let bodyObject = JSON.parse(req.body);
      const newPdf = await db
        .collection("pdfs")
        .findOneAndUpdate({ _id: id }, bodyObject);
      res.json(newPdf);
    default:
      res.status(404).json({ name: "Route not found" });
  }
}

const getPdf = (req: NextApiRequest, res: NextApiResponse, id: any) => {};
const updatePdf = (req: NextApiRequest, res: NextApiResponse, id: any) => {};
