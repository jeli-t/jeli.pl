import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './CallToAction.module.css';
import { useTranslations } from 'next-intl';
import { Link } from 'next-view-transitions'
import { AnimationWrapper } from '../AnimationWrapper/AnimationWrapper'


export function CallToAction() {
  const t = useTranslations('CallToAction');


  return (
    <Container fluid className={classes.component} m={0}>
      <AnimationWrapper>
        <Container className={classes.wrapper} size={1400}>
          <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
          <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
          <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
          <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

          <Container className={classes.inner}>
            <Title className={classes.title} order={2}>
              {t("title")}
            </Title>

            <Container p={0} size={700}>
              <Text size="lg" className={classes.description}>
                {t("description")}
              </Text>
            </Container>

            <div className={classes.controls}>
              <Link href={'/contact'}>
                <Button className={classes.control} size="lg" mt={20} radius={"md"}>
                  {t("button")}
                </Button>
              </Link>
            </div>
          </Container>
        </Container>
      </AnimationWrapper>
    </Container>
  );
}