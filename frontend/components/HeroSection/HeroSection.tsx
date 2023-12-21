import classes from './HeroSection.module.css';
import { Image, Container, Title, Button, Group, Text } from '@mantine/core';
import image from './website_development.svg';
import { useTranslations } from 'next-intl';
import {Link} from '../../navigation';


export function HeroSection() {
  const t = useTranslations('HeroSection');

  return (
    <Container fluid className={classes.component}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <Title className={classes.name}>
            Tomasz Jelito
          </Title>
          <Title className={classes.title}>
            full-stack web developer
          </Title>
          <Text c="dimmed" mt="md" size='lg' className={classes.description}>
            {t("content")}
          </Text>
          <Link href={'/contact'}>
            <Button radius="xl" size="md" className={classes.button}>
              {t('contact')}
            </Button>
          </Link>
        </div>
        <div className={classes.image}>
          <Image src={image.src} alt={t("img")} title={t("img")} />
        </div>
      </div>
    </Container>
  );
}