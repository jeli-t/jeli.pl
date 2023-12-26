import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    Container,
  } from '@mantine/core';
  import { ContactIconsList } from './ContactIcons';
  import classes from './ContactMe.module.css';
  import { useTranslations } from 'next-intl';


export function ContactMe() {
    const t = useTranslations('ContactMe');

    return (
        <Container fluid className={classes.component}>
            <div className={classes.wrapper}>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                <div>
                    <Title className={classes.title}>
                      {t("contact")}
                    </Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                      {t("content")}
                    </Text>
        
                    <ContactIconsList />
        
                </div>
                <div className={classes.form}>
                    <TextInput
                    label="Email"
                    placeholder={t("email_placeholder")}
                    required
                    classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <TextInput
                    label={t("name")}
                    placeholder={t("name_placeholder")}
                    mt="md"
                    classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <Textarea
                    required
                    label={t("message")}
                    placeholder={t("message_placeholder")}
                    minRows={4}
                    mt="md"
                    classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
        
                    <Group justify="flex-end" mt="md">
                    <Button className={classes.control}>
                      {t("button")}
                    </Button>
                    </Group>
                </div>
                </SimpleGrid>
            </div>
        </Container>
    );
  }