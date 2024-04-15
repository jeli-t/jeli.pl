import { Container, SimpleGrid, Text, Card, Group, Flex, HoverCard, HoverCardTarget, HoverCardDropdown, Title } from '@mantine/core';
import classes from './PortfolioProjects.module.css';
import {useTranslations} from 'next-intl';
import { IconWorldWww, IconBrandGithub } from '@tabler/icons-react';


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
    image: "url(/img/qi.png)",
    title: 'qi_title',
    description: 'qi_description',
    page_button: 'live_website',
    page_link: 'https://qi.jeli.pl/',
    source_button: '',
    source_link: ''
  },
  {
    image: "url(/img/agency.png)",
    title: 'agency_title',
    description: 'agency_description',
    page_button: 'live_website',
    page_link: 'https://jeli-agency.vercel.app/',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/agency'
  },
  {
    image: "url(/img/kniha.png)",
    title: 'kniha_title',
    description: 'kniha_description',
    page_button: 'live_website',
    page_link: 'https://kubakniha.pl/',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/kubakniha.pl'
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
  {
    image: "url(/img/akupunktura.png)",
    title: 'akupunktura_title',
    description: 'akupunktura_description',
    page_button: 'live_website',
    page_link: 'https://akupunktura-terapie.pl/',
    source_button: '',
    source_link: ''
  },
  {
    image: "url(/img/portfolio.png)",
    title: 'portfolio_title',
    description: 'portfolio_description',
    page_button: '',
    page_link: '',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/jeli.pl'
  },
  {
    image: "url(/img/algorithms.png)",
    title: 'algorithms_title',
    description: 'algorithms_description',
    page_button: '',
    page_link: '',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/algorithms'
  },
  {
    image: "url(/img/crisis_corridor.png)",
    title: 'crisis_coriddor_title',
    description: 'crisis_coriddor_description',
    page_button: '',
    page_link: '',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/zegluga-game-jam-2023'
  },
  {
    image: "url(/img/sudoku.png)",
    title: 'sudoku_title',
    description: 'sudoku_description',
    page_button: '',
    page_link: '',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/sudoku'
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


export function PortfolioProjects() {
  const items = mockdata.map((item) => <ImageCard {...item} key={item.title} />);
  const t = useTranslations('PortfolioProjects');

  return (
    <Container fluid className={classes.component}>
      <Title order={1} display={"none"}>{t("title")}</Title>
      <SimpleGrid cols={{base: 1, sm: 2}} spacing="xl">
        {items}
      </SimpleGrid>
    </Container>
  );
}
