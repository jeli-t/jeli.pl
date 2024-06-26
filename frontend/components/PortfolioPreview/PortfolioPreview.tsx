import { Button, Container, Space, Text, Title, Card, Group, Flex, SimpleGrid, Badge, HoverCardDropdown, HoverCard, HoverCardTarget } from '@mantine/core';
import { IconWorldWww, IconBrandGithub } from '@tabler/icons-react';
import classes from './PortfolioPreview.module.css';
import {useTranslations} from 'next-intl';
import { Link } from 'next-view-transitions'


interface ProjectProps {
  image: string;
  title: string;
  description: string;
  page_button: string;
  page_link: string;
  source_button: string;
  source_link: string;
}

const mockdata = [
  {
    image: "url(/img/furniro.png)",
    title: 'furniro_title',
    description: 'furniro_description',
    page_button: 'live_website',
    page_link: 'https://furniro.jeli.pl',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/furniro'
  },
  {
    image: "url(/img/agency.png)",
    title: 'agency_title',
    description: 'agency_description',
    page_button: 'live_website',
    page_link: 'https://agency.jeli.pl',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/agency'
  },
  {
    image: "url(/img/akademia.png)",
    title: 'akademia_title',
    description: 'akademia_description',
    page_button: 'live_website',
    page_link: 'https://akademiazaksa.pl/',
    source_button: '',
    source_link: ''
  },
];


export function ImageCard({image, title, description, page_button, page_link, source_button, source_link}: ProjectProps) {
  const t = useTranslations('PortfolioProjects');

  return (
    <HoverCard width={500} shadow='md' withArrow>
      <HoverCardTarget>
        <Card
          p="lg"
          shadow="lg"
          className={classes.card}
          radius="md"
        >
          <a href={page_link === "" ? source_link : page_link} target="_blank">
            <div
              className={classes.image}
              style={{backgroundImage: image}}
            />
            <div className={classes.overlay} />
          </a>

          <div className={classes.content}>
            <a href={page_link === "" ? source_link : page_link} target="_blank" style={{textDecoration: "none"}}>
              <Text size="xl" className={classes.title} fw={500}>
                {t(title)}
              </Text>
            </a>
          </div>
        </Card>
      </HoverCardTarget>
      <HoverCardDropdown>
        <Text size="xl" fw={600} mb={10}>
          {t(title)}
        </Text>
        <Text size="md">
          {t(description)}
        </Text>
        <Flex
              mih={50}
              gap="sm"
              justify="flex-start"
              align="center"
              direction="row"
              wrap="wrap"
            >
              {page_button !== '' && (
                <a href={page_link} target='_blank' className={classes.link}>
                  <Group gap="sm">
                    <IconWorldWww stroke={1.5} />
                    <Text size="lg" >
                      {t(page_button)}
                    </Text>
                  </Group>
                </a>
              )}
              {source_button !== '' && (
                <a href={source_link} target='_blank' className={classes.link}>
                  <Group gap="sm">
                    <IconBrandGithub stroke={2} />
                    <Text size="lg">
                      {t(source_button)}
                    </Text>
                  </Group>
                </a>
              )}
            </Flex>
      </HoverCardDropdown>
    </HoverCard>
  );
}


export function PortfolioPreview() {
  const t = useTranslations('PortfolioPreview');
  const items = mockdata.map((item) => <ImageCard {...item} key={item.title} />);

  return (
    <Container fluid className={classes.component}>
      <Container size={"xl"} className={classes.wrapper}>
        <Group justify="center">
          <Badge variant="filled" size="lg">
            Portfolio
          </Badge>
        </Group>
        <Title order={2} mt={"sm"} className={classes.section_title}>
          {t('title')}
        </Title>
        <SimpleGrid cols={{base: 1, sm: 3}} spacing={50} mt={50}>
          {items}
        </SimpleGrid>
        <Group justify="center">
          <div>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" mt={50} radius={"md"}>
                {t('button')}
              </Button>
            </Link>
          </div>
        </Group>
      </Container>
    </Container>
  );
}