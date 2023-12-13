// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript, createTheme, MantineColorsTuple } from '@mantine/core';
import {notFound} from 'next/navigation';
import { locales } from '@/navigation';
import { HeaderMenu } from '@/components/HeaderMenu/HeaderMenu';
import { Footer } from '@/components/Footer/Footer';


export const metadata = {
  title: 'Jeli.pl',
  description: 'Jeli - Full Stack Developer',
};

// https://mantine.dev/colors-generator/?color=63687C
const BlueGray: MantineColorsTuple = [
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

// https://mantine.dev/colors-generator/?color=099CFF
const SkyBlue: MantineColorsTuple = [
  "#e1f9ff",
  "#ccedff",
  "#9ad7ff",
  "#64c1ff",
  "#3baefe",
  "#20a2fe",
  "#099cff",
  "#0088e4",
  "#0078cd",
  "#0069b6"
]

const theme = createTheme({
  fontFamily: 'Verdana, sans-serif',
  primaryColor: "SkyBlue",
  colors: {BlueGray, SkyBlue}
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
          <div style={{overflowX: 'hidden'}}>
            {children}
          </div>
          <Footer></Footer>
        </MantineProvider>
      </body>
    </html>
  );
}