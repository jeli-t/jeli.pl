import styles from './page.module.css'
import { AboutMeSection } from '@/components/AboutMeSection/AboutMeSection';
import { Container } from '@mantine/core';


export default function About() {
  return (
    <Container fluid>
      <AboutMeSection></AboutMeSection>
    </Container>
  )
}
