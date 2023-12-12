import { Group, Container } from '@mantine/core';
import classes from './Footer.module.css';
import {useTranslations} from 'next-intl';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { LocaleSwitcher } from '../LanguagePicker/LocaleSwitcher';
import {Link} from '../../navigation';
import { Logo } from './Logo'


export function Footer() {
  const t = useTranslations('HeaderMenu');

  return (
      <Container fluid className={classes.wrapper}>
        <div className={classes.inner}>
          <div className={classes.logo_wrapper}>
            <Logo></Logo>
          </div>
          <Group gap={5} visibleFrom="sm">
            <p><Link href='/' key={t('home')} className={classes.link}>{t('home')}</Link></p>
            <p><Link href='/portfolio' key={t('portfolio')} className={classes.link}>{t('portfolio')}</Link></p>
            <p><Link href='/about' key={t('about')} className={classes.link}>{t('about')}</Link></p>
            <p><Link href='/contact' key={t('contact')} className={classes.link}>{t('contact')}</Link></p>
          </Group>
          <Group className={classes.socials_wrapper}>
            <p>IG</p>
            <p>FB</p>
          </Group>
        </div>
      </Container>
  );
}