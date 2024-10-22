import { useBuyStore } from "@/store/buyStore";

function isAbsolute(path) {
  const absoluteCheck = new RegExp('^(?:[a-z+]+:)?//', 'i');
  return absoluteCheck.test(path);
}

function makeAbsolute(req, path) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return `${protocol}://${host}${path}`;
}

function transformBuyData(req, buyOption) {
  if (buyOption.icon && !isAbsolute(buyOption.icon)) {
    buyOption.icon = makeAbsolute(req, buyOption.icon);
  }
  return buyOption;
}

export default function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const buyData = useBuyStore.getState().buyData;

    const transformedBuyData = buyData.map(option => 
      transformBuyData(req, option)
    );

    return res.status(200).json({ 
      buy: transformedBuyData 
    });

  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'An unexpected error occurred'
    });
  }
}