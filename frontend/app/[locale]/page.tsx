import classes from './page.module.css'
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { Container } from '@mantine/core';


export default function Home() {

  return (
    <Container fluid>
      <HeroSection></HeroSection>
    </Container>
  )
}
