// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import {notFound} from 'next/navigation';
import { HeaderMenu } from '../../components/HeaderMenu/HeaderMenu';


export const metadata = {
  title: 'Jeli.pl',
  description: 'Jeli - Full Stack Developer',
};

const locales = ['en', 'pl'];

export default function RootLayout({children, params: {locale}}) {

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <HeaderMenu></HeaderMenu>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}