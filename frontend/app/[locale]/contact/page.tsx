import styles from './page.module.css'
import { ContactMe } from '@/components/ContactMe/ContactMe';
import { Container } from '@mantine/core';


export default function Contact() {
  return (
    <Container fluid>
      <ContactMe></ContactMe>
    </Container>
  )
}
