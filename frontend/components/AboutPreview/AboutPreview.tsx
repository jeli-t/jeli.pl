import { Button, Container, Space, Stack, Text, Title } from '@mantine/core';
import classes from './AboutPreview.module.css';
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import about_preview from './about_preview.svg';
import {Link} from '@/navigation';


export function AboutPreview() {
  const t = useTranslations('AboutPreview');

  return (
    <Container fluid className={classes.component}>
      <Container fluid className={classes.wrapper}>
        <div className={classes.left_section}>
          <Image src={about_preview} alt={t('img')} title={t('img')} loading='eager' height={450} />
        </div>
        <div className={classes.right_section}>
          <Title order={1} className={classes.title}>
            {t('title')}
          </Title>
          <Space my="sm" />
          <Stack gap={5}>
            <Text size="xl">
              - {t('content1')}
            </Text>
            <Text size="xl">
              - {t('content2')}
            </Text>
            <Text size="xl">
              - {t('content3')}
            </Text>
            <Text size="xl">
              - {t('content4')}
            </Text>
            <Text size="xl">
              - {t('content5')}
            </Text>
          </Stack>
          <Space my="sm" />
          <Link href={'/about'}>
            <Button>
              {t('button')}
            </Button>
          </Link>
        </div>
      </Container>
    </Container>
  );
}