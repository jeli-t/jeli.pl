import styles from './page.module.css'
import {Link} from '../../navigation';
import {useTranslations} from 'next-intl';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';


export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <h2><Link href="/portfolio">{t('portfolio')}</Link></h2>
      <h2><Link href="/about">{t('about')}</Link></h2>
      <h2><Link href="/contact">{t('contact')}</Link></h2>
      <br></br>
      <h2><Link href="/" locale='pl'>Polish</Link></h2>
      <h2><Link href="/" locale='en'>English</Link></h2>
      <br></br>
      <ColorSchemeToggle />
    </div>
  )
}
