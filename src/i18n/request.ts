import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
import { createServerApiClient } from 'ui/lib/api-client';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

    const serverApi = createServerApiClient({ revalidate: 60 });
    const messages = await serverApi.get<any>(`/api/translations/key-value?locale=${locale}`);
  return {
    locale,
    messages: messages.data
  };
});
