import { Group, Container, ActionIcon, rem, Title } from '@mantine/core';
import classes from './Footer.module.css';
import {useTranslations} from 'next-intl';
import { IconMail, IconBrandLinkedin } from '@tabler/icons-react';
import {Link} from '../../navigation';
import { Logo } from './Logo'


export function Footer() {
  const t = useTranslations('HeaderMenu');

  return (
    <Container fluid p={0} className={classes.component}>
      <Container fluid className={classes.wrapper}>
        <div className={classes.inner}>
          <Logo></Logo>
          <Group gap={5} visibleFrom="sm">
            <p><Link href='/' key={t('home')} className={classes.link}>{t('home')}</Link></p>
            <p><Link href='/portfolio' key={t('portfolio')} className={classes.link}>{t('portfolio')}</Link></p>
            <p><Link href='/about' key={t('about')} className={classes.link}>{t('about')}</Link></p>
            <p><Link href='/contact' key={t('contact')} className={classes.link}>{t('contact')}</Link></p>
            <p><Link href='/privacy' key={t('privacy')} className={classes.link}>{t('privacy')}</Link></p>
          </Group>
          <Group>
            <a href="mailto:jeli@jeli.pl" className={classes.icon}>
              <ActionIcon size="md" variant="default" radius="xl">
                <IconMail style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
            </a>
            <a href="https://www.linkedin.com/in/tomasz-jelito/" target='_blank' className={classes.icon}>
              <ActionIcon size="md" variant="default" radius="xl">
                  <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
              </ActionIcon>
            </a>
          </Group>
        </div>
      </Container>
      <Container fluid className={classes.wrapper}>
        <Title order={6}>
          © 2024 jeli.pl. All rights reserved.
        </Title>
      </Container>
      <Container fluid className={classes.privacy_link}>
        <Link href='/privacy' key={t('privacy')} className={classes.link}>{t('privacy')}</Link>
      </Container>
    </Container>
  );
}