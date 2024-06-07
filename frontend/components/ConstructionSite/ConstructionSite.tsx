import { Button, Container, Space, Title } from '@mantine/core';
import classes from './ConstructionSite.module.css';
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import construction from './construction.svg';
import { Link } from 'next-view-transitions'


export function ConstructionSite() {
  const t = useTranslations('ConstructionSite');

  return (
    <Container fluid className={classes.wrapper}>
        <Image src={construction} alt="Construction site" title='Construction site' loading='eager' height={400} />
        <Title order={2}>
            {t('message')}
        </Title>
        <Space h={'xl'}></Space>
        <Link href={'/'}>
        <Button size='sm'>{t('button')}</Button>
        </Link>
    </Container>
  );
}