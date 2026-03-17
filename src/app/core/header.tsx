'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from 'ui/components/ui/hover-card';
import { Button } from 'ui/components/ui/button';
import { ChevronDown } from 'ui/lib/chevronDown';
// import { GetStarted } from '../home/get-started';
export default function Header() {
  const pathname = usePathname() || '';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isActive = (href: string) => isMounted && pathname.startsWith(href);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobilePlatformOpen, setIsMobilePlatformOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  const navLinks = [
    { href: '/company', label: 'Company' },
    { href: '/newsroom', label: 'Newsroom' },
    { href: '/contacts', label: 'Contact Us' },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [selectedLang, setSelectedLang] = useState<'eng' | 'arm'>('eng');
  const languages = {
    eng: { code: 'eng', display: 'ENG' },
    arm: { code: 'arm', display: 'Հայ' }
  };
  const otherLang = selectedLang === 'eng' ? languages.arm : languages.eng;

  return (
    <>
      <header className={`fixed top-5 left-5 rounded-full z-10 bg-foreground text-primary py-[14px] w-[calc(100%-40px)] px-8`}>
        <nav className="flex justify-between items-center gap-[16px]">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Eleveight AI"
              width={153}
              height={64}
              priority
            />
          </Link>
          
          <div className="hidden md-lg:flex w-full justify-center items-center gap-10">
            <span className="flex gap-6">
             
              {/* Simple nav links */}
                {navLinks.map((item) => 
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold text-primary hover:text-primaryGreen ${isActive(item.href) ? 'text-primaryGreen' : ''}`}
                >
                  {item.label}
                </Link>
              )}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center justify-between gap-4">
              <HoverCard openDelay={200} closeDelay={300} open={isLangOpen} onOpenChange={setIsLangOpen}>
                <HoverCardTrigger asChild>
                  <button className="text-sm font-semibold text-primary flex items-center">
                    {languages[selectedLang].display}
                    <ChevronDown isOpen={isLangOpen} />
                  </button>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-20 h-16 bg-foreground rounded-br-[16px] rounded-bl-[16px] p-4" 
                  align="center"
                  sideOffset={15}
                >
                  <button
                    onClick={() => {
                      setSelectedLang(otherLang.code as 'eng' | 'arm');
                      setIsLangOpen(false);
                    }}
                    className="w-full text-left p-2 text-primary rounded-md text-sm font-semibold"
                  >
                    {otherLang.display}
                  </button>
                </HoverCardContent>
              </HoverCard>
              <Button
                variant="default"
                size="default"
                asChild
              >
                <Link href="/contacts">
                  Get Started
                </Link>
              </Button>
            </div>
            
            {/* Mobile Burger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="xl:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen &&(
        <div 
          className="fixed inset-0 bg-secondary z-[999] xl:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-72 z-[1001] transform transition-transform duration-300 ease-in-out xl:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <button
          onClick={closeMobileMenu}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
          aria-label="Close menu"
        >
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col text-primary bg-foreground pt-20 pb-8">
          {/* Simple nav links */}
          {[
            { href: '/pricing', label: 'Pricing' },
            { href: '/developers', label: 'Developers' },
            { href: '/resources', label: 'Resources' },
            { href: '/company', label: 'Company' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={`px-8 py-4 text-sm font-semibold hover:text-primary transition-colors ${isActive(item.href) ? 'text-primary' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
                href="/login"
                onClick={closeMobileMenu}
                className={`px-8 py-4 text-sm font-semibold hover:text-primary transition-colors}`}              >
                Log in
              </Link>

              <div className="flex justify-around mt-1">
              {(['eng', 'arm'] as const).map((lang) => (
                <Button
                  key={lang}
                  disabled={selectedLang === lang}
                  onClick={() => setSelectedLang(lang)}
                  className={` ${ selectedLang === lang && 'text-primary/90 cursor-default' }`}
                >
                  {languages[lang].display}
                </Button>
              ))}
            </div>
        </div>
      </div>
    </>
  );
}