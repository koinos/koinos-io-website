import { useExchangeStore } from "@/store/exchangeStore";
import { isAbsolute, makeAbsolute } from "@/utils/urlHelpers";

function transformExchange(req, exchange) {
  if (exchange.icon && !isAbsolute(exchange.icon)) {
    exchange.icon = makeAbsolute(req, exchange.icon);
  }
  return exchange;
}

export default function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { exchanges } = useExchangeStore.getState();

    const exchangeList = exchanges.map(exchange => 
      transformExchange(req, exchange)
    );

    return res.status(200).json({ 
      exchanges: exchangeList 
    });

  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'An unexpected error occurred'
    });
  }
}
