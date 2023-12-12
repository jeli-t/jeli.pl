import classes from './page.module.css'
import {useTranslations} from 'next-intl';
import { ConstructionSite } from '../../components/ConstructionSite/ConstructionSite';
import { Container } from '@mantine/core';


export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <Container fluid>
      <ConstructionSite></ConstructionSite>
    </Container>
  )
}
