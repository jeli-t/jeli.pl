import { ActionIcon, Container, Group, rem, Space, Text, Title } from '@mantine/core';
import classes from './AboutMeSection.module.css';
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import about_me from './about_me.svg';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';


export function AboutMeSection() {
  const t = useTranslations('AboutMe');

  return (
    <Container fluid className={classes.component}>
      <Container fluid className={classes.wrapper}>
        <div className={classes.left_section}>
          <Image src={about_me} alt={t('img')} title={t('img')} loading='eager' height={600} />
        </div>
        <div className={classes.right_section}>
          <Title order={1} className={classes.title}>
            {t('title')}
          </Title>
          <Space my="sm" />
          <Text size="xl">
            {t('content')}
          </Text>
          <Group gap={10} className={classes.socials} justify="flex-start" wrap="nowrap">
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
        </div>
      </Container>
    </Container>
  );
}