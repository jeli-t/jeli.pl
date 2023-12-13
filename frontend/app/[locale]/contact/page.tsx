import styles from './page.module.css'
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { Container } from '@mantine/core';


export default function Contact() {
  return (
    <Container fluid>
      <ContactSection></ContactSection>
    </Container>
  )
}
