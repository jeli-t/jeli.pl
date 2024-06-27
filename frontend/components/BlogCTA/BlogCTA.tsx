import { Container, Title, Text, Flex, List, ListItem, rem, ThemeIcon } from '@mantine/core';
import classes from './BlogCTA.module.css';
import {useTranslations} from 'next-intl';
import Image from 'next/image'
import solopreneurpaths from './solopreneurpaths.png';
import { IconWorldWww } from '@tabler/icons-react';


export function BlogCTA() {
    const t = useTranslations('BlogCTA');

    return (
        <Container mt={100} mb={30} size="xl">
            <Flex direction={{ base: 'column', sm: 'row' }} align="center" justify="center" gap={{ base: 0, sm: 30 }}>
                <div className={classes.banner}>
                    <a href='https://solopreneurpaths.com' target="_blank"><Image src={solopreneurpaths} alt="solopreneurpaths.com" title="solopreneurpaths.com" className={classes.image} /></a>
                </div>
                <Container className={classes.content}>
                    <Title order={2} className={classes.title}>
                    {t('title')}
                    </Title>
                    <Text className={classes.description} maw={450}>
                    {t('description')}
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
        </Container>
    );
}