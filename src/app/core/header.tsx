'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from 'ui/components/ui/button';
import { useTranslations} from 'next-intl';
import LocaleSwitcher from './locale-switcher';
import { Link, usePathname } from '../../i18n/navigation';

export default function Header() {

  const t = useTranslations();
  console.log('t', t('GET_STARTED'));
  const pathname = usePathname() || '';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '/company', label: 'HEADER_COMPANY' },
    { href: '/newsroom', label: 'HEADER_NEWSROOM' },
    { href: '/contacts', label: 'HEADER_CONTACT' },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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

          <div className="hidden md:flex w-full justify-center items-center gap-10">
            <span className="flex gap-6">
             
              {/* Simple nav links */}
                {navLinks.map((item) => 
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold text-primary hover:text-primaryGreen ${isActive(item.href) ? 'text-primaryGreen' : ''}`}
                >
                  {t(item.label)}
                </Link>
              )}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center justify-between gap-4">
              <LocaleSwitcher />

              <Button
                variant="default"
                size="default"
                asChild
              >
                <Link href="/contacts">
                  {t('GET_STARTED')}
                </Link>
              </Button>
            </div>
            
            {/* Mobile Burger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen &&(
        <div 
          className="fixed inset-0 z-10 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-56 z-10 transform transition-transform duration-300 ease-in-out xl:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={`px-8 py-4 text-sm font-semibold hover:text-primary transition-colors ${isActive(item.href) ? 'text-primaryGreen' : ''}  `}
            >
              {t(item.label)}
            </Link>
          ))}
          <Link
            href="/login"
            className={`px-8 py-4 text-sm font-semibold hover:text-primary transition-colors}`}              >
            Log in
          </Link>

          <LocaleSwitcher />
        </div>
      </div>
    </>
  );
}