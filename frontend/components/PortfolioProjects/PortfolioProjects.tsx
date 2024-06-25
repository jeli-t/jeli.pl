import { Container, Text, Flex, Title } from '@mantine/core';
import classes from './PortfolioProjects.module.css';
import {useTranslations} from 'next-intl';
import Image from 'next/image'


interface ProjectProps {
  image: string;
  title: string;
  description: string;
  page_link: string;
  additional_link: string;
}

const mockdata = [
  {
    image: "/img/solopreneurpaths.png",
    title: 'solopreneurpaths_title',
    description: 'solopreneurpaths_description',
    page_link: 'https://solopreneurpaths.com/',
    additional_link: ''
  },
  {
    image: "/img/pokojezielonanoc.png",
    title: 'pokojezielonanoc_title',
    description: 'pokojezielonanoc_description',
    page_link: 'https://pokojezielonanoc.pl/',
    additional_link: ''
  },
  {
    image: "/img/furniro.png",
    title: 'furniro_title',
    description: 'furniro_description',
    page_link: 'https://furniro.jeli.pl',
    additional_link: 'https://www.figma.com/community/file/1252561852327562039'
  },
  {
    image: "/img/akademia.png",
    title: 'akademia_title',
    description: 'akademia_description',
    page_link: 'https://akupunktura-terapie.pl/',
    additional_link: ''
  },
  {
    image: "/img/agency.png",
    title: 'agency_title',
    description: 'agency_description',
    page_link: 'https://agency.jeli.pl',
    additional_link: 'https://github.com/jeli-t/agency'
  },
  {
    image: "/img/portfolio.png",
    title: 'portfolio_title',
    description: 'portfolio_description',
    page_link: 'https://jeli.pl',
    additional_link: ''
  },
];


export function ProjectCard({image, title, description, page_link, additional_link}: ProjectProps) {
  const t = useTranslations('PortfolioProjects');

  return (
    <Flex direction={{ base: 'column', sm: 'row' }} align="center" justify="center" gap={{ base: 0, sm: 50 }} w={"100%"}>
      <div className={classes.banner}>
        <a href={page_link} target="_blank"><Image src={image} alt={title} title={title} width={720} height={400} className={classes.image} /></a>
      </div>
      <Flex direction="column" className={classes.content}>
        <a href={page_link} target="_blank" className={classes.link}>
          <Title order={2} className={classes.title}>
            {t(title)}
          </Title>
        </a>
        <Text className={classes.description}>
          {t(description)}
        </Text>
        {additional_link && (
          <a href={additional_link} target="_blank" className={classes.link}>
            <Text className={classes.description} lineClamp={1}>
              {additional_link}
            </Text>
          </a>
        )}
      </Flex>
    </Flex>
  );
}


export function PortfolioProjects() {
  const items = mockdata.map((item) => <ProjectCard {...item} key={item.title} />);

  return (
    <Container size={"xl"} className={classes.component}>
      <Flex w={"100%"} direction="column" align="center" justify="center" gap={120}>
        {items}
      </Flex>
    </Container>
  );
}
