import styles from './page.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <h2><Link href="/portfolio">Portfolio</Link></h2>
      <h2><Link href="/about">About</Link></h2>
      <h2><Link href="/contact">Contact</Link></h2>
    </div>
  )
}
