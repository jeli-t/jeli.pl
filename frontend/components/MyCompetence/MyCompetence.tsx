import { Button, Container, Group, Space, Text, Title } from '@mantine/core';
import classes from './MyCompetence.module.css';
import {useTranslations} from 'next-intl';


export function MyCompetence() {
  const t = useTranslations('MyCompetence');

  return (
    <Container fluid className={classes.component}>
      <Container fluid className={classes.wrapper}>
        <div className={classes.left_section}>
          <Title order={1} className={classes.title}>
            {t('title')}
          </Title>
          <Space my="sm" />
          <Text size="lg">
            {t('content1')}
          </Text>
          <Space my="sm" />
          <Text size="lg">
            {t('content2')}
          </Text>
          <Space my="sm" />
          <Text size="lg">
            {t('content3')}
          </Text>
          <Space my="sm" />
          <div>
            <a href="https://www.linkedin.com/in/tomasz-jelito/" target='_blank'>
              <Button className={classes.link}>LinkedIn</Button>
            </a>
          </div>
        </div>
        <div className={classes.right_section}>
          <Title order={1} className={classes.title}>
            {t('skills')}
          </Title>
          <Space my="sm" />
          <Group>
            <Button variant='light' className={classes.skill}>SEO</Button>
            <Button variant='light' className={classes.skill}>Next JS</Button>
            <Button variant='light' className={classes.skill}>React</Button>
            <Button variant='light' className={classes.skill}>Mantine</Button>
            <Button variant='light' className={classes.skill}>Responsive Design</Button>
            <Button variant='light' className={classes.skill}>Git</Button>
            <Button variant='light' className={classes.skill}>Github</Button>
            <Button variant='light' className={classes.skill}>JavaScript</Button>
            <Button variant='light' className={classes.skill}>TypeScript</Button>
            <Button variant='light' className={classes.skill}>REST API</Button>
            <Button variant='light' className={classes.skill}>Django</Button>
            <Button variant='light' className={classes.skill}>PostgreSQL</Button>
            <Button variant='light' className={classes.skill}>MySQL</Button>
            <Button variant='light' className={classes.skill}>HTML</Button>
            <Button variant='light' className={classes.skill}>CSS</Button>
            <Button variant='light' className={classes.skill}>PHP</Button>
            <Button variant='light' className={classes.skill}>Java</Button>
            <Button variant='light' className={classes.skill}>Python</Button>
            <Button variant='light' className={classes.skill}>C++</Button>
            <Button variant='light' className={classes.skill}>Linux</Button>
            <Button variant='light' className={classes.skill}>DevOps</Button>
            <Button variant='light' className={classes.skill}>Docker</Button>
            <Button variant='light' className={classes.skill}>GCP</Button>
            <Button variant='outline' className={classes.skill}>{t('polish')}</Button>
            <Button variant='outline' className={classes.skill}>{t('english')}</Button>
          </Group>
        </div>
      </Container>
    </Container>
  );
}