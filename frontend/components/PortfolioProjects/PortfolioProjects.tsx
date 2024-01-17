import { Button, Container, Space, Text, Title } from '@mantine/core';
import classes from './PortfolioProjects.module.css';
import {useTranslations} from 'next-intl';
import Image, { StaticImageData } from 'next/image'
import agency from './images/agency.png';
import akademia from './images/akademia.png';
import akupunktura from './images/akupunktura.png';
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
  {
    image: portfolio,
    title: 'portfolio_title',
    description: 'portfolio_description',
    page_button: '',
    page_link: '',
    source_button: 'source_code',
    source_link: 'https://github.com/jeli-t/jeli.pl'
  },
];


function Project({image, title, description, page_button, page_link, source_button, source_link}: ProjectProps) {
  const t = useTranslations('PortfolioProjects');

  return (
    <Container fluid className={classes.component}>
      <Container fluid className={classes.wrapper}>
        <div className={classes.left_section}>
          <Image src={image} alt={t(title)} title={t(title)} loading='eager' height={400} />
        </div>
        <div className={classes.right_section}>
          <Title order={1} className={classes.title}>
            {t(title)}
          </Title>
          <Space my="sm" />
          <Text className={classes.description}>
            {t(description)}
          </Text>
          <Space my="sm" />
          <div>
            {page_button !== '' && (
              <a href={page_link} target='_blank'>
                <Button className={classes.link}>{t(page_button)}</Button>
              </a>
            )}
            {source_button !== '' && (
              <a href={source_link} target='_blank'>
                <Button className={classes.link}>{t(source_button)}</Button>
              </a>
            )}
          </div>
        </div>
      </Container>
    </Container>
  );
}


export function PortfolioProjects() {
  const items = mockdata.map((item) => <Project {...item} key={item.title} />);

  return (
    <>
      {items}
    </>
  );
}