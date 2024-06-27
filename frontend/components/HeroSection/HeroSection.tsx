import classes from './HeroSection.module.css';
import { Container, Title, Button, Text } from '@mantine/core';
import { HeroImage } from './HeroImage';
import { useTranslations } from 'next-intl';
import { Link } from 'next-view-transitions'
import { AnimationWrapper } from '../AnimationWrapper/AnimationWrapper'


export function HeroSection() {
  const t = useTranslations('HeroSection');

  return (
    <Container fluid className={classes.component}>
      <Container size={"xl"} className={classes.wrapper}>
        <Container className={classes.content}>
          <Title order={1}>
            <span className={classes.name}>
              Tomasz Jelito
            </span>
            <br />
            <span className={classes.title}>
              Full Stack Web Developer
            </span>
          </Title>
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