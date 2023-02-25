import { Client } from "@notionhq/client";
import { getRequestMeta } from "next/dist/server/request-meta";
const { NotionToMarkdown } = require("notion-to-md");


const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getAllWorks = async () => {
  const response = await notion.pages.retrieve({ 
    page_id: process.env.NOTION_WORKS,
  });

  const page = response;
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  
  return {
    markdown: mdString,
  };
}


export const getAboutPage = async () => {
  const response = await notion.pages.retrieve({ 
    page_id: process.env.NOTION_ABOUT,
  });

  const page = response;
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  
  
  return {
    markdown: mdString,
  };
}

export const getAbout = async () => {
  const response = await notion.pages.retrieve({ 
    page_id: process.env.NOTION_ABOUT,
  });

  const page = response;
  return page;
}

export const getAllContact = async () => {
  const response = await notion.databases.query({
      database_id: process.env.NOTION_CONTACT,
      "sorts": [
        {
            "property": "Name",
            "direction": "ascending"
        }
    ]
  });

  const allContacts = response.results;

  return allContacts.map((ctc) => {
    return getContacts(ctc);
  });
};

const getContacts = (ctc) => {
  return {
    id: ctc.id,
    account:ctc.properties.Name.title[0].plain_text,
    link:ctc.properties.Link.rich_text[0].text.content,
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

export const getRates = async () => {
  const response = await notion.databases.query({
      database_id: process.env.NOTION_COM_RATES,
      sorts: [
        {
          property: 'Price (PHP)',
          direction: 'ascending',
        },
      ],
  });

  const allRates = response.results;

  return allRates.map((rts) => {
    return getRatesData(rts);
  });
};

const getRatesData = (data) => {
  return {
    id: data.id,
    name:data.properties.Name.title[0].plain_text,
    sample:data.properties.Sample.files[0].file.url,
    pesos:data.properties['Price (PHP)'].number,
  };
  }

  export const getAddtlFees = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_COM_ADDTLFEES,
        sorts: [
          {
            property: 'Price (PHP)',
            direction: 'ascending',
          },
        ],
    });
  
    const allRates = response.results;
  
    return allRates.map((rts) => {
      return getRatesData(rts);
    });
  };
  
  const getAddtlFeesData = (data) => {
    return {
      id: data.id,
      name:data.properties.Name.title[0].plain_text,
      sample:data.properties.Sample.files[0].file.url,
      pesos:data.properties['Price (PHP)'].number,
    };
    }