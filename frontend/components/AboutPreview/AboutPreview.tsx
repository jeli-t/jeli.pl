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
          <Stack>
            <Title order={1} className={classes.title}>
              {t('title')}
            </Title>
          </Stack>
          <Space my="sm" />
          <Stack gap={5}>
            <Text className={classes.description}>
              - {t('content1')}
            </Text>
            <Text className={classes.description}>
              - {t('content2')}
            </Text>
            <Text className={classes.description}>
              - {t('content3')}
            </Text>
            <Text className={classes.description}>
              - {t('content4')}
            </Text>
            <Text className={classes.description}>
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
        <div className={classes.right_section}>
          <Image src={about_preview} alt={t('img')} title={t('img')} loading='eager' height={450} />
        </div>
      </Container>
    </Container>
  );
}