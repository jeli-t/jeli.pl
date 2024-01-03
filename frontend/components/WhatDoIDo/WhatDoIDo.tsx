import { Text, SimpleGrid, Container, rem, Title } from '@mantine/core';
import { IconPhone, IconPuzzle, IconUserCheck } from '@tabler/icons-react';
import classes from './WhatDoIDo.module.css';
import {useTranslations} from 'next-intl';


export function WhatDoIDo() {
  const t = useTranslations('WhatDoIDo');

  return (
    <Container fluid className={classes.component}>
      <Container mt={30} mb={30} size="lg">
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
          <div className={classes.feature}>
            <div className={classes.overlay} />
            <div className={classes.content}>
              <IconPuzzle style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
              <Title order={2} fw={700} fz="xl" mb="xs" mt={5} className={classes.title}>
                {t("title1")}
              </Title>
              <Text className={classes.description}>
                {t("description1")}
              </Text>
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.overlay} />
            <div className={classes.content}>
              <IconUserCheck style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
              <Title order={2} fw={700} fz="xl" mb="xs" mt={5} className={classes.title}>
                {t("title2")}
              </Title>
              <Text className={classes.description}>
                {t("description2")}
              </Text>
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.overlay} />
            <div className={classes.content}>
              <IconPhone style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
              <Title order={2} fw={700} fz="xl" mb="xs" mt={5} className={classes.title}>
                {t("title3")}
              </Title>
              <Text className={classes.description}>
                {t("description3")}
              </Text>
            </div>
          </div>
        </SimpleGrid>
      </Container>
    </Container>
  );
}