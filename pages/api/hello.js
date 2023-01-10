// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//export default function handler(req, res) {
 // res.status(200).json({ name: 'John Doe' })
//}
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})
export default async (req,res)=>{
  const response = await notion.databases.query({ 
    database_id: process.env.NOTION_HOME,
  });
  const allHome = response.results;
  res.status(200).json(allHome[0].properties.Image.files[0].file.url);
}