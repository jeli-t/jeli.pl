import { Container, SimpleGrid, Text, Card, Group } from '@mantine/core';
import classes from './PortfolioProjects.module.css';
import {useTranslations} from 'next-intl';
import Image, { StaticImageData } from 'next/image'
import agency from './images/agency.png';
import akademia from './images/akademia.png';
import akupunktura from './images/akupunktura.png';
import kniha from './images/kniha.png';
import portfolio from './images/portfolio.png';


interface ProjectProps {
  image: StaticImageData;
  title: string;
  description: string;
  page_button: string;
  page_link: string;
  source_button: string;
  source_link: string;
}

const mockdata = [
  {
    image: agency,
    title: 'agency_title',
    description: 'agency_description',
    page_button: 'live_website',
    page_link: 'https://jeli-agency.vercel.app/',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/agency'
  },
  {
    image: kniha,
    title: 'kniha_title',
    description: 'kniha_description',
    page_button: 'live_website',
    page_link: 'https://kubakniha.pl/',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/kubakniha.pl'
  },
  {
    image: portfolio,
    title: 'portfolio_title',
    description: 'portfolio_description',
    page_button: '',
    page_link: '',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/jeli.pl'
  },
  {
    image: akademia,
    title: 'akademia_title',
    description: 'akademia_description',
    page_button: 'live_website',
    page_link: 'https://akademiazaksa.pl/',
    source_button: '',
    source_link: ''
  },
  {
    image: akupunktura,
    title: 'akupunktura_title',
    description: 'akupunktura_description',
    page_button: 'live_website',
    page_link: 'https://akupunktura-terapie.pl/',
    source_button: '',
    source_link: ''
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
      href={page_link}
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(/logo.png)`
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {t(title)}
          </Text>

          <Group justify="left" gap="lg">
            {page_button !== '' && (
              <a href={page_link} target='_blank' style={{textDecoration: "none"}}>
                <Text size="md" className={classes.link}>
                  {t(page_button)}
                </Text>
              </a>
            )}
            {source_button !== '' && (
              <a href={source_link} target='_blank' style={{textDecoration: "none"}}>
                <Text size="md" className={classes.link}>
                  {t(source_button)}
                </Text>
              </a>
            )}
          </Group>
        </div>
      </div>
    </Card>
  );
}


export function PortfolioProjects() {
  const items = mockdata.map((item) => <ImageCard {...item} key={item.title} />);

  return (
    <Container fluid className={classes.component}>
      <SimpleGrid cols={{base: 1, sm: 2}} spacing="xl">
        {items}
      </SimpleGrid>
    </Container>
  );
}