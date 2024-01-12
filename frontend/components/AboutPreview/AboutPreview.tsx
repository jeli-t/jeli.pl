import { Button, Container, List, ListItem, Space, Stack, Text, Title } from '@mantine/core';
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
          <List className={classes.description}>
            <ListItem>{t('content1')}</ListItem>
            <ListItem>{t('content2')}</ListItem>
            <ListItem>{t('content3')}</ListItem>
            <ListItem>{t('content4')}</ListItem>
          </List>
          <Space my="sm" />
          <div>
            <Link href={'/about'}>
              <Button>
                {t('button')}
              </Button>
            </Link>
            <a href="https://www.linkedin.com/in/tomasz-jelito/" target='_blank'>
              <Button ml={20}>
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
        <div className={classes.right_section}>
          <Image src={about_preview} alt={t('img')} title={t('img')} loading='eager' height={450} />
        </div>
      </Container>
    </Container>
  );
}