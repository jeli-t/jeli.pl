import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import classes from './CallToAction.module.css';
import { useTranslations } from 'next-intl';
import {Link} from '../../navigation';


export function CallToAction() {
  const t = useTranslations('CallToAction');


  return (
    <Container fluid className={classes.component} p={0}>
      <Container className={classes.wrapper} size={1400}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
        <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            {t("title")}
          </Title>

          <Container p={0} size={800}>
            <Text size="lg" className={classes.description}>
              {t("description")}
            </Text>
          </Container>

          <div className={classes.controls}>
            <Link href={'/contact'}>
              <Button className={classes.control} size="lg">
                {t("button")}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Container>
  );
}