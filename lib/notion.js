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

export const getAbout = async () => {
  const response = await notion.databases.query({
      database_id: process.env.NOTION_ABOUT
  });

  const allAbout = response.results;

  return allAbout.map((abt) => {
    return getAboutData(abt);
  });
};

const getAboutData = (abt) => {
  return {
    id: abt.id,
    title:abt.properties.Name.title[0].plain_text,
  };
}

export const getLanding = async () => {
  const response = await notion.databases.query({
      database_id: process.env.NOTION_HOME,
      sorts: [
        {
          property: 'Section',
          direction: 'ascending',
        },
      ],
  });

  const allLanding = response.results[0];

  return getHomeData(allLanding);
};

export const getSection = async () => {
  const response = await notion.databases.query({
      database_id: process.env.NOTION_HOME,
      sorts: [
        {
          property: 'Section',
          direction: 'ascending',
        },
      ],
  });

  const allSection = response.results[1];

  return getHomeData(allSection);
};

const getHomeData = (data) => {
  return {
    id: data.id,
    title:data.properties.Name.title[0].plain_text,
    description:data.properties.Description.rich_text[0].text.content,
    cover:data.properties.Image.files[0].file.url
  };
}