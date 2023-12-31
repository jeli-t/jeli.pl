import classes from './page.module.css'
import { Container } from '@mantine/core';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { AboutPreview } from '@/components/AboutPreview/AboutPreview';


export default function Home() {

  return (
    <Container fluid p={0}>
      <HeroSection></HeroSection>
      <AboutPreview></AboutPreview>
    </Container>
  )
}
