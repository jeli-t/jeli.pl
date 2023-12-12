// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript, createTheme, MantineColorsTuple  } from '@mantine/core';
import {notFound} from 'next/navigation';
import { locales } from '../../navigation';
import { HeaderMenu } from '../../components/HeaderMenu/HeaderMenu';


export const metadata = {
  title: 'Jeli.pl',
  description: 'Jeli - Full Stack Developer',
};

// https://mantine.dev/colors-generator/?color=63687C
const myColor: MantineColorsTuple = [
  "#f3f3fe",
  "#e4e6ed",
  "#c8cad3",
  "#a9adb9",
  "#9093a4",
  "#808496",
  "#767c91",
  "#656a7e",
  "#585e72",
  "#4a5167"
]

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  primaryColor: "gray",
  colors: {myColor}
});

export default function RootLayout({children, params: {locale}}) {

  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderMenu></HeaderMenu>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}