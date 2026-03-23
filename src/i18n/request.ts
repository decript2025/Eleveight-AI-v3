import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { defaultLocale, locales, type Locale } from './config';
import { createServerApiClient } from 'ui/lib/api-client';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
  const locale: Locale = locales.includes(cookieLocale as Locale)
    ? (cookieLocale as Locale)
    : defaultLocale;

    const serverApi = createServerApiClient({ revalidate: 60 });
    const messages = await serverApi.get<any>(`/api/translations/key-value?locale=${locale}`);
  return {
    locale,
    messages: messages.data,
  };
});
