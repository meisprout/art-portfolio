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
    database_id: process.env.NOTION_CONTACT,
});
  const allHome = response.results;
  
  /*return allHome.map((ctc)=>{
    res.status(200).json(getContactData(ctc));
  })*/
  res.status(200).json(allHome[1]);
 
}

const getContactData = (data) => {
return {
  id: data.id,
  name:data.properties.Name.title[0].plain_text,
  link:data.properties.Link.rich_text[0].text.content,
};
}