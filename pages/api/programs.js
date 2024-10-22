import { useProgramStore } from "@/store/programStore";
import { useBuyStore } from "@/store/buyStore";
import { basename } from 'path';

function isAbsolute(path) {
  const absoluteCheck = new RegExp('^(?:[a-z+]+:)?//', 'i');
  return absoluteCheck.test(path);
}

function makeAbsolute(req, path) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return `${protocol}://${host}${path}`;
}

function transformProgram(req, program) {
  if (!isAbsolute(program.url)) {
    program.url = makeAbsolute(req, program.url);
  }

  if (!isAbsolute(program.images.banner)) {
    program.images.banner = makeAbsolute(req, program.images.banner);
  }

  return program;
}

function transformBuyData(req, buyData) {
  if (!isAbsolute(buyData.icon)) {
    buyData.icon = makeAbsolute(req, buyData.icon);
  }
  return buyData;
}

export default function handler(req, res) {
  try {
  const { method } = req;
    if (method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const endpoint = basename(req.url || '');

    if (endpoint === 'programs') {
      const { programs } = useProgramStore.getState();

      const programList = Object.entries(programs)
        .filter(([_, program]) => program.active)
        .map(([key, program]) => {
          const { details, ...rest } = program;
          return transformProgram(req, { key, ...rest });
        });
  
      res.status(200).json({ 
        programs: programList,
      });
    }

    if (endpoint === 'buy') {
      const { buyData } = useBuyStore.getState();

      const buyOptions = buyData.map((option) => 
         transformBuyData(req, option)
      );
      return res.status(200).json({ 
        buy: buyOptions 
      });
    }
    return res.status(404).json({ error: 'Endpoint not found' });

  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'An unexpected error occurred'
    });
  }
}
