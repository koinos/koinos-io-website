// the purpose of this is to fetch the rss feed from medium and convert it to json
// we previously used api.rss2json.com but they now prevent a cloudflare challenge
// this just gets it directly from the source (medium) and converts it to json

import { NextApiRequest, NextApiResponse } from 'next';
import xml2js from 'xml2js';

export default async function handler(req, res) {
  try {
    const response = await fetch('https://medium.com/feed/koinosnetwork');
    const xml = await response.text();
    
    xml2js.parseString(xml, { mergeAttrs: true, explicitArray: false }, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
        return res.status(500).json({ message: 'Error parsing XML' });
      }

      const items = result.rss.channel.item;
      const json = {
        items: items.map(item => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          content: item['content:encoded'] || '',
          author: item['dc:creator']
        }))
      };

      res.status(200).json(json);
    });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}