import { Container, Space, Title } from '@mantine/core';
import classes from './ContactSection.module.css';
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import contact from './contact.svg';


export function ContactSection() {
  const t = useTranslations('ContactSection');

  return (
    <Container fluid className={classes.wrapper}>
        <Image src={contact} alt={t('img')} title={t('img')} loading='eager' height={400} />
        <Title order={2}>
          {t('message')}
        </Title>
        <Space h={'sm'}></Space>
        <a href="mailto:jeli@jeli.pl">
          <Title order={1}>
              jeli@jeli.pl
          </Title>
        </a>
    </Container>
  );
}