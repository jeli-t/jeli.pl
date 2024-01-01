import { Button, Container, Space, Stack, Text, Title } from '@mantine/core';
import classes from './PortfolioPreview.module.css';
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import portfolio_preview from './portfolio_preview.png';
import {Link} from '@/navigation';


export function PortfolioPreview() {
  const t = useTranslations('PortfolioPreview');

  return (
    <Container fluid className={classes.component}>
      <Container fluid className={classes.wrapper}>
        <div className={classes.left_section}>
          <Image src={portfolio_preview} alt={t('img')} title={t('img')} loading='eager' height={500} />
        </div>
        <div className={classes.right_section}>
          <Title order={1} className={classes.title}>
            {t('title')}
          </Title>
          <Space my="sm" />
          <Text className={classes.description}>
            {t('description')}
          </Text>
          <Space my="sm" />
          <div>
            <Link href={'/portfolio'}>
              <Button className={classes.link}>Portfolio</Button>
            </Link>
            <a href="https://github.com/jeli-t">
              <Button className={classes.link}>Github</Button>
            </a>
          </div>
        </div>
      </Container>
    </Container>
  );
}