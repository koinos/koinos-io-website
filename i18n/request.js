export default async function getMessages(locale) {
    return (await import(`../messages/${locale}.json`)).default;
  }