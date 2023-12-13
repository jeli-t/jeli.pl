import classes from './page.module.css'
import {useTranslations} from 'next-intl';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { Container } from '@mantine/core';


export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <Container fluid>
      <HeroSection></HeroSection>
    </Container>
  )
}
