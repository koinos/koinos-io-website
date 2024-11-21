import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always',
  timeZone: 'UTC'
});

export const config = {
  matcher: ['/', '/(es|en)/:path*']
}; 