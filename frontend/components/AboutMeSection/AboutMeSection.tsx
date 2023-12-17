import { Container, Space, Text, Title } from '@mantine/core';
import classes from './AboutMeSection.module.css';
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import about_me from './about_me.svg';


export function AboutMeSection() {
  const t = useTranslations('AboutMe');

  return (
    <Container fluid className={classes.component}>
      <Container fluid className={classes.wrapper}>
        <div className={classes.left_section}>
          <Image src={about_me} alt={t('img')} title={t('img')} loading='eager' height={600} />
        </div>
        <div className={classes.right_section}>
          <Title order={1}>
            {t('title')}
          </Title>
          <Space my="sm" />
          <Text size="lg">
            {t('content')}
          </Text>
        </div>
      </Container>
    </Container>
  );
}