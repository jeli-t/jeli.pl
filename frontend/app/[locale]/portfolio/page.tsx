import styles from './page.module.css'
import { Container } from '@mantine/core';
import { PortfolioProjects } from '@/components/PortfolioProjects/PortfolioProjects';


export default function Portfolio() {
  return (
    <Container fluid p={0} pt={100}>
      <PortfolioProjects></PortfolioProjects>
    </Container>
  )
}
