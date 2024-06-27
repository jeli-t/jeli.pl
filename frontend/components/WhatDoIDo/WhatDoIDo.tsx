import { Container, Title, Text, Button, Flex, List, ListItem, rem, ThemeIcon } from '@mantine/core';
import classes from './WhatDoIDo.module.css';
import {useTranslations} from 'next-intl';
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import furniro from './furniro.png';
import agency from './agency.png';
import solopreneurpaths from './solopreneurpaths.png';
import { IconCircleCheck, IconWorldWww } from '@tabler/icons-react';


export function WhatDoIDo() {
  const t = useTranslations('WhatDoIDo');

  return (
    <Container fluid className={classes.component}>
      <Container mt={30} mb={30} size="xl">
        <Flex direction="column" align="center" justify="center" gap={80}>
          <Flex direction={{ base: 'column', sm: 'row' }} align="center" justify="center" gap={{ base: 0, sm: 30 }}>
            <div className={classes.banner}>
              <a href="https://agency.jeli.pl" target="_blank"><Image src={agency} alt="agency.jeli.pl" title="agency.jeli.pl" className={classes.image} /></a>
            </div>
            <Container className={classes.content}>
              <Title order={2} className={classes.title}>
                {t('title1_1')}{' '}{t('title1_2')}
              </Title>
              <Text className={classes.description}>
                {t('description1_1')}
                <br />
                {t('description1_2')}
              </Text>
              <List mt={10} className={classes.description} center spacing="md" icon={
                <ThemeIcon size={24} radius={"xl"}>
                  <IconCircleCheck style={{ width: rem(18), height: rem(18) }} />
                </ThemeIcon>}
              >
                <ListItem>{t('bullet1_1')}</ListItem>
                <ListItem>{t('bullet1_2')}</ListItem>
                <ListItem>{t('bullet1_3')}</ListItem>
                <ListItem>{t('bullet1_4')}</ListItem>
              </List>
            </Container>
          </Flex>
          <Flex direction={{ base: 'column', sm: 'row-reverse' }} align="center" justify="center" gap={{ base: 0, sm: 30 }}>
            <div className={classes.banner}>
              <a href="https://furniro.jeli.pl" target="_blank"><Image src={furniro} alt="furniro.jeli.pl" title="furniro.jeli.pl" className={classes.image} /></a>
            </div>
            <Container className={classes.content}>
              <Title order={2} className={classes.title}>
                {t('title2_1')}{' '}{t('title2_2')}
              </Title>
              <Text className={classes.description}>
                {t('description2_1')}
                <br />
                {t('description2_2')}
              </Text>
              <List mt={10} className={classes.description} center spacing="md" icon={
                <ThemeIcon size={24} radius={"xl"}>
                  <IconCircleCheck style={{ width: rem(18), height: rem(18) }} />
                </ThemeIcon>}
              >
                <ListItem>{t('bullet2_1')}</ListItem>
                <ListItem>{t('bullet2_2')}</ListItem>
              </List>
            </Container>
          </Flex>
          <Flex direction={{ base: 'column', sm: 'row' }} align="center" justify="center" gap={{ base: 0, sm: 30 }}>
            <div className={classes.banner}>
              <a href='https://solopreneurpaths.com' target="_blank"><Image src={solopreneurpaths} alt="solopreneurpaths.com" title="solopreneurpaths.com" className={classes.image} /></a>
            </div>
            <Container className={classes.content}>
              <Title order={2} className={classes.title}>
                {t('title3_1')}{' '}{t('title3_2')}
              </Title>
              <Text className={classes.description} maw={450}>
                {t('description3_1')}
                <br />
                {t('description3_2')}
              </Text>
              <List mt={10} className={classes.description} center spacing="md" icon={
                <ThemeIcon size={24} radius={"xl"}>
                  <IconWorldWww style={{ width: rem(18), height: rem(18) }} />
                </ThemeIcon>}
              >
                <ListItem>
                  <a href="https://solopreneurpaths.com" target="_blank" className={classes.link}>www.SolopreneurPaths.com</a>
                </ListItem>
              </List>
            </Container>
          </Flex>
          <Link href="/portfolio">
            <Button size="lg" radius={"md"}>
              {t('button')}
            </Button>
          </Link>
        </Flex>
      </Container>
    </Container>
  );
}