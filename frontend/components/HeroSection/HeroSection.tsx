import classes from './HeroSection.module.css';
import {useTranslations} from 'next-intl';
import { Logo } from './Logo'
import { Container } from '@mantine/core';


export function HeroSection() {
  const t = useTranslations('HeaderMenu');

  return (
    <Container fluid className={classes.wrapper}>
      <Logo></Logo>
    </Container>
  );
}