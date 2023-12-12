import { Group, Container, Divider } from '@mantine/core';
import classes from './HeaderMenu.module.css';
import {useTranslations} from 'next-intl';
import { BurgerMenu } from './BurgerMenu';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { LocaleSwitcher } from '../LanguagePicker/LocaleSwitcher';
import {Link} from '@/navigation';
import { Logo } from './Logo'


export function HeaderMenu() {
  const t = useTranslations('HeaderMenu');

  return (
    <header className={classes.header}>
      <Container size="lg">
        <div className={classes.inner}>
          <Logo></Logo>
          <Group gap={5} visibleFrom="sm">
            <p><Link href='/' key={t('home')} className={classes.link}>{t('home')}</Link></p>
            <p><Link href='/portfolio' key={t('portfolio')} className={classes.link}>{t('portfolio')}</Link></p>
            <p><Link href='/about' key={t('about')} className={classes.link}>{t('about')}</Link></p>
            <p><Link href='/contact' key={t('contact')} className={classes.link}>{t('contact')}</Link></p>
            <LocaleSwitcher></LocaleSwitcher>
            <ColorSchemeToggle></ColorSchemeToggle>
          </Group>
          <BurgerMenu className={classes.burger}>
            <p><Link href='/' key={t('home')} className={classes.link}>{t('home')}</Link></p>
            <Divider my={"sm"}></Divider>
            <p><Link href='/portfolio' key={t('portfolio')} className={classes.link}>{t('portfolio')}</Link></p>
            <Divider my={"sm"}></Divider>
            <p><Link href='/about' key={t('about')} className={classes.link}>{t('about')}</Link></p>
            <Divider my={"sm"}></Divider>
            <p><Link href='/contact' key={t('contact')} className={classes.link}>{t('contact')}</Link></p>
            <Divider my={"md"}></Divider>
            <ColorSchemeToggle></ColorSchemeToggle>
            <Divider my={"md"}></Divider>
            <LocaleSwitcher></LocaleSwitcher>
          </BurgerMenu>
        </div>
      </Container>
    </header>
  );
}