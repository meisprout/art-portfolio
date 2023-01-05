import { Client } from "@notionhq/client";
const { NotionToMarkdown } = require("notion-to-md");


const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getAllWorks = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_WORKS
    });
  
    const allWorks = response.results;
  
    return allWorks.map((wrk) => {
      return getWorks(wrk);
    });
  };

  const getWorks = (wrk) => {
    return {
      id: wrk.id,
      title:wrk.properties.Name.title[0].plain_text,
      slug:wrk.properties.Slug.formula.string,
    };
  }

export const getSinglePost = async (slug) => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_WORKS,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });
  
    const page = response.results[0];
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);
  
    return {
      markdown: mdString,
    };
}
