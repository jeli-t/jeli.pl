import { Container, Title, Text, Button, Flex, List, ListItem, rem, ThemeIcon } from '@mantine/core';
import classes from './WhatDoIDo.module.css';
import {useTranslations} from 'next-intl';
import { Link } from 'next-view-transitions'
import Image from 'next/image'
import furniro from './furniro.png';
import agency from './agency.png';
import crisis_corridor from './crisis_corridor.png';
import { IconCircleCheck } from '@tabler/icons-react';

export function WhatDoIDo() {
  const t = useTranslations('WhatDoIDo');

  return (
    <Container fluid className={classes.component}>
      <Container mt={30} mb={30} size="xl">
        <Flex direction="column" align="center" justify="center" gap={60}>
          <Flex direction={{ base: 'column', sm: 'row' }} align="center" justify="center">
            <a href="https://agency.jeli.pl" target="_blank" className={classes.link}>
              <Image src={agency} alt="agency.jeli.pl" title="agency.jeli.pl" className={classes.image} />
            </a>
            <Container className={classes.content}>
              <Title order={2} className={classes.title}>
                {t('title1')}
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
          <Flex direction={{ base: 'column', sm: 'row-reverse' }} align="center" justify="center">
            <a href="https://furniro.jeli.pl" target="_blank" className={classes.link}>
              <Image src={furniro} alt="furniro.jeli.pl" title="furniro.jeli.pl" className={classes.image} />
            </a>
            <Container className={classes.content}>
              <Title order={2} className={classes.title}>
                {t('title2')}
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
          <Flex direction={{ base: 'column', sm: 'row' }} align="center" justify="center">
            <a href='https://github.com/jeli-t/zegluga-game-jam-2023' target="_blank" className={classes.link}>
              <Image src={crisis_corridor} alt="Crisis Corridor Game" title="Crisis Corridor Game" className={classes.image} />
            </a>
            <Container className={classes.content}>
              <Title order={2} className={classes.title}>
                {t('title3')}
              </Title>
              <Text className={classes.description} maw={450}>
                {t('description3')}
              </Text>
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