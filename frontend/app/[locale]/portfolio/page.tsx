import styles from './page.module.css'
import { Container } from '@mantine/core';
import { PortfolioProjects } from '@/components/PortfolioProjects/PortfolioProjects';
import { CallToAction } from '@/components/CallToAction/CallToAction';


export default function Portfolio() {
  return (
    <Container fluid p={0} pt={100}>
      <PortfolioProjects></PortfolioProjects>
      <CallToAction></CallToAction>
    </Container>
  )
}
