import styles from './page.module.css'
import { AboutMeSection } from '@/components/AboutMeSection/AboutMeSection';
import { MyCompetence } from '@/components/MyCompetence/MyCompetence';
import { Container } from '@mantine/core';


export default function About() {
  return (
    <Container fluid p={0}>
      <AboutMeSection></AboutMeSection>
      <MyCompetence></MyCompetence>
    </Container>
  )
}
