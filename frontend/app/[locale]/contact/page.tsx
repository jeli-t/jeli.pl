import styles from './page.module.css'
import { ContactMe } from '@/components/ContactMe/ContactMe';
import { Container } from '@mantine/core';
import {getTranslations} from 'next-intl/server';


export async function generateMetadata() {
  const t = await getTranslations('SEO');

  return {
    title: t('contact_page_title'),
    description: t('contact_page_description'),
    alternates: {
      canonical: '/contact',
      languages: {
        'en': 'https://jeli.pl/contact',
        'pl': 'https://jeli.pl/pl/kontakt'
      },
    }
  };
}


export default function Contact() {
  return (
    <Container fluid>
      <ContactMe></ContactMe>
    </Container>
  )
}
