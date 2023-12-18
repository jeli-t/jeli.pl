import classes from './HeroSection.module.css';
import {useTranslations} from 'next-intl';
import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';


export function HeroSection() {
  const t = useTranslations('HeroSection');

  return (
    <Container fluid className={classes.component}>
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            <Text component="span" className={classes.highlight} inherit>
              Tomasz Jelito
            </Text>
          </Title>
          <Title className={classes.title}>
            full-stack web developer
          </Title>
          <Container p={0} size={600}>
            <Text size="lg" c="dimmed" className={classes.description}>
              {t('content')}
            </Text>
          </Container>
        </div>
      </Container>
    </Container>
  );
}