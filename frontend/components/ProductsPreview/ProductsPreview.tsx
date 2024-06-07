import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, GridCol, rem, Container } from '@mantine/core';
import { IconBriefcase, IconZoomQuestion, IconShoppingCart, IconCalendarEvent } from '@tabler/icons-react';
import classes from './ProductsPreview.module.css';
import {useTranslations} from 'next-intl';
import { Link } from 'next-view-transitions'

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
    <Container m={0} key={t(feature.title)} className={classes.product}>
      <Container p={0} display={"flex"}>
        <ThemeIcon
          size={44}
          radius="md"
        >
          <feature.icon style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
        </ThemeIcon>
        <Text fz="lg" fw={600} ml={"sm"} mt={"sm"}>
          {t(feature.title)}
        </Text>
      </Container>
      <Text c="dimmed" fz="sm" mt={"md"} maw={400}>
        {t(feature.description)}
      </Text>
    </Container>
  ));

  return (
    <Container size={"xl"} className={classes.component}>
        <Grid gutter={80}>
          <GridCol span={{ base: 12, md: 4 }}>
            <Title className={classes.title} order={2}>
              {t("title")}
            </Title>
            <Text fz={"lg"} maw={600}>
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
          <GridCol span={{ base: 12, md: 8 }}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
              {items}
            </SimpleGrid>
          </GridCol>
        </Grid>
    </Container>
  );
}