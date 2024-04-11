import styles from './page.module.css'
import { Container } from '@mantine/core';
import { PortfolioProjects } from '@/components/PortfolioProjects/PortfolioProjects';
import { CallToAction } from '@/components/CallToAction/CallToAction';
import {getTranslations} from 'next-intl/server';


export async function generateMetadata() {
  const t = await getTranslations('SEO');

  return {
    title: t('portfolio_page_title'),
    description: t('portfolio_page_description'),
    alternates: {
      canonical: '/portfolio',
      languages: {
        'en': 'https://jeli.pl/portfolio',
        'pl': 'https://jeli.pl/pl/portfolio'
      },
    }
  };
}


export default function Portfolio() {
  return (
    <Container fluid p={0}>
      <PortfolioProjects></PortfolioProjects>
      <CallToAction></CallToAction>
    </Container>
  )
}
