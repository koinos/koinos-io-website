import { useProgramStore } from "@/store/programStore";
import { isAbsolute, makeAbsolute } from "@/utils/urlHelpers";

function transformProgram(req, program) {
  if (!isAbsolute(program.url)) {
    program.url = makeAbsolute(req, program.url);
  }

  if (!isAbsolute(program.images.banner)) {
    program.images.banner = makeAbsolute(req, program.images.banner);
  }

  return program;
}

export default function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

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
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: process.env.NODE_ENV === 'development' ? error.message : 'An unexpected error occurred'
    });
  }
}
