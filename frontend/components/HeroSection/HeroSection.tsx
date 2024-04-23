import classes from './HeroSection.module.css';
import { Container, Title, Button, Text } from '@mantine/core';
import { HeroImage } from './HeroImage';
import { useTranslations } from 'next-intl';
import { Link } from '../../navigation';


export function HeroSection() {
  const t = useTranslations('HeroSection');

  return (
    <Container fluid className={classes.component}>
      <Container size={"xl"} className={classes.wrapper}>
        <Container className={classes.content}>
          <Title className={classes.name} order={1}>
            Tomasz Jelito
          </Title>
          <Title className={classes.title} order={2}>
            full-stack web developer
          </Title>
          <Text c="dimmed" mt="md" size='lg' className={classes.description}>
            {t("content")}
          </Text>
          <Link href={'/contact'}>
            <Button
              size="lg"
              radius="md"
              mt="lg"
            >
              {t("contact")}
            </Button>
          </Link>
        </Container>
        <div className={classes.image}>
          <HeroImage />
        </div>
      </Container>
    </Container>
  );
}