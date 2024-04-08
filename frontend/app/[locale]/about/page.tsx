import styles from './page.module.css'
import { Container } from '@mantine/core';
import { AboutMeSection } from '@/components/AboutMeSection/AboutMeSection';
import { MyCompetence } from '@/components/MyCompetence/MyCompetence';
import { CallToAction } from '@/components/CallToAction/CallToAction';
import {getTranslations} from 'next-intl/server';


export async function generateMetadata() {
  const t = await getTranslations('SEO');

  return {
    title: t('about_page_title'),
    description: t('about_page_description')
  };
}


export default function About() {
  return (
    <Container fluid p={0}>
      <AboutMeSection></AboutMeSection>
      <MyCompetence></MyCompetence>
      <CallToAction></CallToAction>
    </Container>
  )
}
