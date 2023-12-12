import { Button, Container, Space, Title } from '@mantine/core';
import classes from './PageNotFound.module.css';
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import notFound from './notFound.svg';
import {Link} from '../../navigation';


export function PageNotFound() {
  const t = useTranslations('PageNotFound');

  return (
    <Container fluid className={classes.wrapper}>
        <Image src={notFound} alt="404" title='404' loading='eager' height={400} />
        <Title order={2}>
            {t('message')}
        </Title>
        <Space h={'xl'}></Space>
        <Link href={'/'}>
        <Button size='sm' className={classes.button}>{t('button')}</Button>
        </Link>
    </Container>
  );
}