import { ActionIcon, Button, Container, Group, List, ListItem, rem, Space, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconCircleCheck } from '@tabler/icons-react';
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
          <Title order={1} className={classes.title}>
            {t('title')}
          </Title>
          <Group mt={10} gap={10} justify="flex-start" wrap="nowrap">
            <ActionIcon component='a' href="" size="lg" color="gray" variant="subtle">
              <IconBrandTwitter style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon component='a' href="https://www.linkedin.com/in/tomasz-jelito/" size="lg" color="gray" variant="subtle">
              <IconBrandLinkedin style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon component='a' href="" size="lg" color="gray" variant="subtle">
              <IconBrandInstagram style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon component='a' href="" size="lg" color="gray" variant="subtle">
              <IconBrandGithub style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
            </ActionIcon>
          </Group>
          <Space my="sm" />
          <List mt={10} className={classes.description} center spacing="md" icon={
              <ThemeIcon size={24} radius={"xl"}>
                <IconCircleCheck style={{ width: rem(18), height: rem(18) }} />
              </ThemeIcon>}
          >
            <ListItem>{t('content1')}</ListItem>
            <ListItem>{t('content2')}</ListItem>
            <ListItem>{t('content3')}</ListItem>
          </List>
          <Space my="md" />
          <div>
            <Link href={'/about'}>
              <Button>
                {t('button')}
              </Button>
            </Link>
          </div>
        </div>
        <div className={classes.right_section}>
          <Image src={about_preview} alt={t('img')} title={t('img')} loading='eager' height={450} />
        </div>
      </Container>
    </Container>
  );
}