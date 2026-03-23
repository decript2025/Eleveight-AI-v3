export type Locale  = typeof locales[number];

export const locales = ['en', 'hy'] as const;
export const defaultLocale = 'hy' as const;