import { HoverCard, HoverCardContent, HoverCardTrigger } from 'ui/components/ui/hover-card';
import { ChevronDown } from 'ui/lib/chevronDown';
import { useState } from 'react';
import { Locale } from 'next-intl';
import { Button } from 'ui/components/ui/button';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../i18n/navigation';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const languages: Record<Locale, { display: string }> = {
    en: { display: 'Eng' },
    hy: { display: 'Հայ' },
  };
  const currentLocale = useLocale();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const otherLang: Locale = currentLocale === 'en' ? 'hy' : 'en';

  const switchLanguage = (nextLocale: Locale) => {
    // next-intl handles the prefix logic for you!
    router.replace(pathname, { locale: nextLocale });
  };


  return (
    <>
    <div className="hidden md:block">
      <HoverCard openDelay={200} closeDelay={300} open={isLangOpen} onOpenChange={setIsLangOpen}>
        <HoverCardTrigger asChild>
          <button className="text-sm font-semibold text-primary flex items-center">
            { languages[currentLocale]?.display }
            <ChevronDown isOpen={isLangOpen} />
          </button>
        </HoverCardTrigger>
        <HoverCardContent 
          className="w-20 h-16 bg-foreground rounded-br-[16px] rounded-bl-[16px] p-4" 
          align="center"
          sideOffset={15}
        >
          <button
            onClick={() => switchLanguage(otherLang)}
            className="w-full text-left p-2 text-primary rounded-md text-sm font-semibold"
          >
            {languages[otherLang].display}
          </button>
        </HoverCardContent>
      </HoverCard>
    </div>

    <div className="flex justify-around mt-1 block md:hidden">
    {Object.keys(languages).map((lang) => (
      <Button
        key={lang}
        disabled={currentLocale === lang}
        onClick={() => switchLanguage(lang)}
        className={`${currentLocale === lang && 'text-primary/90 cursor-default'}`}
      >
        {languages[lang].display}
      </Button>
    ))}
    </div>
    </>
  );
}