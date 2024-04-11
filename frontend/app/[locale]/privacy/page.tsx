import styles from './page.module.css'
import { Container } from '@mantine/core';
import { PrivacyPolicy } from '@/components/PrivacyPolicy/PrivacyPolicy';
import { PolitykaPrywatnosci } from '@/components/PrivacyPolicy/PolitykaPrywatnosci';
import {getTranslations} from 'next-intl/server';


export async function generateMetadata() {
  const t = await getTranslations('SEO');

  return {
    title: t('privacy_page_title'),
    description: t('privacy_page_description'),
    alternates: {
      canonical: '/privacy',
      languages: {
        'en': 'https://jeli.pl/privacy-policy',
        'pl': 'https://jeli.pl/pl/polityka-prywatnosci'
      },
    }
  };
}


interface PrivacyProps {
  params: {
    locale: string;
  };
}

export default function Privacy({ params: { locale } }: PrivacyProps) {
  if(locale == "pl") {
    return (
      <Container fluid p={0}>
        <PolitykaPrywatnosci></PolitykaPrywatnosci>
      </Container>
    )
  } else {
    return (
      <Container fluid p={0}>
        <PrivacyPolicy></PrivacyPolicy>
      </Container>
    )
  }
}
