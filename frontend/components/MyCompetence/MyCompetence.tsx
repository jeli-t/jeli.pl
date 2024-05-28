import { Button, Container, Group, Space, Text, Timeline, TimelineItem, Title } from '@mantine/core';
import classes from './MyCompetence.module.css';
import {useTranslations} from 'next-intl';


export function MyCompetence() {
  const t = useTranslations('MyCompetence');

  return (
    <Container fluid className={classes.component}>
      <Container size={"xl"} className={classes.wrapper}>
        <Container className={classes.left_section}>
          <Title order={2} className={classes.title}>
            {t('title')}
          </Title>
          <Space my="sm" />
          <Timeline active={2} bulletSize={20} lineWidth={2}>
            <TimelineItem title={t('title1')} lineVariant="dashed">
              <Text c="dimmed" size="sm">{t('description1')}</Text>
              <Text size="xs" mt={4}>{t('date1')}</Text>
            </TimelineItem>

            <TimelineItem title={t('title2')}>
              <Text c="dimmed" size="sm">{t('description2')}</Text>
              <Text size="xs" mt={4}>{t('date2')}</Text>
            </TimelineItem>

            <TimelineItem title={t('title3')}>
              <Text c="dimmed" size="sm">{t('description3')}</Text>
              <Text size="xs" mt={4}>{t('date3')}</Text>
            </TimelineItem>
          </Timeline>
        </Container>
        <Container className={classes.right_section}>
          <Title order={2} className={classes.title}>
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
            <Button variant='light' className={classes.skill}>Python</Button>
            <Button variant='light' className={classes.skill}>Linux</Button>
            <Button variant='light' className={classes.skill}>DevOps</Button>
            <Button variant='light' className={classes.skill}>Docker</Button>
            <Button variant='light' className={classes.skill}>GCP</Button>
            <Button variant='outline' className={classes.skill}>{t('polish')}</Button>
            <Button variant='outline' className={classes.skill}>{t('english')}</Button>
          </Group>
        </Container>
      </Container>
    </Container>
  );
}