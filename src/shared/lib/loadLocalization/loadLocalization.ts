export const loadLocaleMessages = async (locale: string) => {
  try {
    return (await import(`@public/locale/${locale === 'default' ? 'ru' : locale}.json`)).default;
  } catch (error) {
    console.error('Error loading localization messages', error);
    return {};
  }
};
