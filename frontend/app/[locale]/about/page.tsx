import styles from './page.module.css'
import { ConstructionSite } from '../../../components/ConstructionSite/ConstructionSite';
import { Container } from '@mantine/core';


export default function About() {
  return (
    <Container fluid>
      <ConstructionSite></ConstructionSite>
    </Container>
  )
}
