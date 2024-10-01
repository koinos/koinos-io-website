import { useProgramStore } from "@/store/programStore";

function makeAbsolute(req, relativePath) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return `${protocol}://${host}${relativePath}`;
}

function transformProgram(req, program) {
  program.url = makeAbsolute(req, program.url);
  program.images.banner = makeAbsolute(req, program.images.banner);
  return program;
}

export default function handler(req, res) {
  try {
    const { programs } = useProgramStore.getState();

    const programList = Object.entries(programs)
      .filter(([_, program]) => program.active)
      .map(([key, program]) => {
        const { details, guide, ...rest } = program;
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
