# Website translations

The site uses Next.js locale routing. English is the default locale and Spanish
pages use the `/es` prefix.

## Adding a translated page

1. Add the route to `translatedRoutes.es` in `config.json`.
2. Keep the page structure shared; put substantial page copy in a locale data
   module, following `data/getKoin.js` and `data/getKoin.es.js`.
3. Select the locale module from `router.locale`, following
   `pages/get-koin.js`.
4. Use `localeForPath` for shared navigation links so untranslated pages fall
   back to English instead of appearing under `/es`.
5. Add canonical and `hreflang` links and include the localized URL in
   `public/sitemap.xml`.
6. Translate image alternative text and captions as well as visible copy.

When a route is available in every supported language, a shared `Link` can let
Next.js preserve the active locale without an explicit `locale` prop.

An individual translated section on an otherwise untranslated page can be
registered with its fragment, as in `/#features`. Shared links to the bare page
will continue falling back to English until the whole page is translated.
