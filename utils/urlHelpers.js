export function isAbsolute(path) {
  const absoluteCheck = new RegExp('^(?:[a-z+]+:)?//', 'i');
  return absoluteCheck.test(path);
}

export function makeAbsolute(req, path) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  return `${protocol}://${host}${path}`;
}
