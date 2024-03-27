import { Button, Container, Space, Text, Title, Card, Group, Flex, SimpleGrid, Badge } from '@mantine/core';
import { IconWorldWww, IconBrandGithub } from '@tabler/icons-react';
import classes from './PortfolioPreview.module.css';
import {useTranslations} from 'next-intl';
import {Link} from '@/navigation';


interface ProjectProps {
  image: string;
  title: string;
  page_button: string;
  page_link: string;
  source_button: string;
  source_link: string;
}

const mockdata = [
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
    image: "url(/img/portfolio.png)",
    title: 'portfolio_title',
    description: 'portfolio_description',
    page_button: '',
    page_link: '',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/jeli.pl'
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
];


export function ImageCard({image, title, page_button, page_link, source_button, source_link}: ProjectProps) {
  const t = useTranslations('PortfolioProjects');

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href={page_link === "" ? source_link : page_link}
      target="_blank"
    >
      <div
        className={classes.image}
        style={{backgroundImage: image}}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="xl" className={classes.title} fw={500}>
            {t(title)}
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
        </div>
      </div>
    </Card>
  );
}


export function PortfolioPreview() {
  const t = useTranslations('PortfolioPreview');
  const items = mockdata.map((item) => <ImageCard {...item} key={item.title} />);

  return (
    <Container fluid className={classes.component}>
      <Container fluid className={classes.wrapper}>
        <Group justify="center">
          <Badge variant="filled" size="lg">
            Portfolio
          </Badge>
        </Group>
        <Title order={1} mt={"sm"} className={classes.section_title}>
          {t('title')}
        </Title>
        <SimpleGrid cols={{base: 1, sm: 3}} spacing="md" mt={50}>
          {items}
        </SimpleGrid>
        <Group justify="center">
          <div>
            <Link href="/portfolio">
              <Button variant="outline" size="md" mt={"xl"}>
                {t('button')}
              </Button>
            </Link>
          </div>
        </Group>
      </Container>
    </Container>
  );
}