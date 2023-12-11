import { Group, Container } from '@mantine/core';
import classes from './HeaderMenu.module.css';
import {useTranslations} from 'next-intl';
import { BurgerButton } from './BurgerButton';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { LocaleSwitcher } from '../LanguagePicker/LocaleSwitcher';
import {Link} from '../../navigation';
import Image from 'next/image'
import logoDark from './logoDark.png';


export function HeaderMenu() {
  const t = useTranslations('HeaderMenu');

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <div>
              <Image src={logoDark} alt="Jeli.pl" title='Jeli.pl' loading='eager' height={50} />
          </div>
          <Group gap={5} visibleFrom="sm">
            <p><Link href='/' key={t('home')} className={classes.link}>{t('home')}</Link></p>
            <p><Link href='/portfolio' key={t('portfolio')} className={classes.link}>{t('portfolio')}</Link></p>
            <p><Link href='/about' key={t('about')} className={classes.link}>{t('about')}</Link></p>
            <p><Link href='/contact' key={t('contact')} className={classes.link}>{t('contact')}</Link></p>
            <LocaleSwitcher></LocaleSwitcher>
            <ColorSchemeToggle></ColorSchemeToggle>
          </Group>
          <BurgerButton></BurgerButton>
        </div>
      </Container>
    </header>
  );
}