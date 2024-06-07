import { Group, Container, ActionIcon, rem, Title } from '@mantine/core';
import classes from './Footer.module.css';
import {useTranslations} from 'next-intl';
import { IconMail, IconBrandLinkedin, IconBrandInstagram, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';
import { Link } from 'next-view-transitions'
import { Logo } from './Logo'


export function Footer() {
  const t = useTranslations('HeaderMenu');

  return (
    <Container fluid p={0} className={classes.component}>
      <Container fluid className={classes.wrapper}>
        <div className={classes.inner}>
          <Group w={"15%"}>
            <Logo></Logo>
          </Group>
          <Group gap={5} visibleFrom="sm">
            <p><Link href='/' key={t('home')} className={classes.link}>{t('home')}</Link></p>
            <p><Link href='/portfolio' key={t('portfolio')} className={classes.link}>{t('portfolio')}</Link></p>
            <p><Link href='/about' key={t('about')} className={classes.link}>{t('about')}</Link></p>
            <p><Link href='/contact' key={t('contact')} className={classes.link}>{t('contact')}</Link></p>
            <p><Link href='/privacy' key={t('privacy')} className={classes.link}>{t('privacy')}</Link></p>
          </Group>
          <Group w={"15%"} gap={0} justify="flex-end" wrap="nowrap">
            <ActionIcon component='a' href="https://twitter.com/tomasz_jelito" target='_blank' size="lg" color="gray" variant="subtle">
              <IconBrandTwitter style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon component='a' href="https://www.linkedin.com/in/tomasz-jelito/" target='_blank' size="lg" color="gray" variant="subtle">
              <IconBrandLinkedin style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon component='a' href="https://www.instagram.com/tomaszjelito/" target='_blank' size="lg" color="gray" variant="subtle">
              <IconBrandInstagram style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon component='a' href="https://github.com/jeli-t" target='_blank' size="lg" color="gray" variant="subtle">
              <IconBrandGithub style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon component='a' href="mailto:jeli@jeli.pl" target='_blank' size="lg" color="gray" variant="subtle">
              <IconMail style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </Container>
      <Container fluid className={classes.wrapper}>
        <Title order={3} size={14} fw={500}>
          © 2024 jeli.pl. All rights reserved.
        </Title>
      </Container>
      <Container fluid className={classes.privacy_link}>
        <Link href='/privacy' key={t('privacy')} className={classes.link}>{t('privacy')}</Link>
      </Container>
    </Container>
  );
}