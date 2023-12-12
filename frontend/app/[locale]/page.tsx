import classes from './page.module.css'
import {Link} from '../../navigation';
import {useTranslations} from 'next-intl';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import { Button } from '@mantine/core';


export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <br></br>
      <h1>{t('title')}</h1>
      <h2><Link href="/portfolio">{t('portfolio')}</Link></h2>
      <h2><Link href="/about">{t('about')}</Link></h2>
      <h2><Link href="/contact">{t('contact')}</Link></h2>
      <br></br>
      <h2><Link href="/" locale='pl'>Polish</Link></h2>
      <h2><Link href="/" locale='en'>English</Link></h2>
      <br></br>
      <ColorSchemeToggle />
      <br></br>
      <Button variant='filled' m={'sm'}>Theme check</Button>
      <br></br>
      <Button variant='filled' m={'sm'} className={classes.button}>Theme check</Button>
    </div>
  )
}
