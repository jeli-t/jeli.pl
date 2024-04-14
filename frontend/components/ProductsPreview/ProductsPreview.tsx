import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, GridCol, rem, Container } from '@mantine/core';
import { IconBriefcase, IconZoomQuestion, IconShoppingCart, IconCalendarEvent } from '@tabler/icons-react';
import classes from './ProductsPreview.module.css';
import {useTranslations} from 'next-intl';
import {Link} from '@/navigation';

const features = [
  {
    icon: IconBriefcase,
    title: 'title1',
    description: 'description1',
  },
  {
    icon: IconCalendarEvent,
    title: 'title2',
    description: 'description2',
  },
  {
    icon: IconShoppingCart,
    title: 'title3',
    description: 'description3',
  },
  {
    icon: IconZoomQuestion,
    title: 'title4',
    description: 'description4',
  },
];

export function ProductsPreview() {
  const t = useTranslations('ProductsPreview');

  const items = features.map((feature) => (
    <div key={t(feature.title)}>
      <ThemeIcon
        size={44}
        radius="md"
      >
        <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {t(feature.title)}
      </Text>
      <Text c="dimmed" fz="sm">
        {t(feature.description)}
      </Text>
    </div>
  ));

  return (
    <Container fluid className={classes.component}>
      <div className={classes.wrapper}>
        <Grid gutter={80}>
          <GridCol span={{ base: 12, md: 5 }}>
            <Title className={classes.title} order={2}>
              {t("title")}
            </Title>
            <Text c="dimmed" fz={"lg"}>
              {t("description")}
            </Text>
            <Link href="/contact">
              <Button
                size="lg"
                radius="md"
                mt="lg"
              >
                {t("button")}
              </Button>
            </Link>
          </GridCol>
          <GridCol span={{ base: 12, md: 7 }}>
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
              {items}
            </SimpleGrid>
          </GridCol>
        </Grid>
      </div>
    </Container>
  );
}