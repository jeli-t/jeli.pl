import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['en', 'pl'] as const;
  export const localePrefix = 'as-needed';
   

  export const pathnames = {
    '/': '/',

    '/about': {
      en: '/about',
      pl: '/o-mnie'
    },

    '/contact': {
      en: '/contact',
      pl: '/kontakt'
    },

    '/portfolio': '/portfolio',

  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});