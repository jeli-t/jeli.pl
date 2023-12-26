import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    Container,
    Stack,
    Box,
    rem,
  } from '@mantine/core';
  import { IconSun, IconMapPin, IconAt } from '@tabler/icons-react';
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
        
                    <Stack>
                        <div className={classes.icons_wrapper}>
                          <Box mr="md">
                            <IconAt style={{ width: rem(24), height: rem(24) }} />
                          </Box>
                          <div>
                            <Text size="xs" className={classes.icons_title}>
                              Email
                            </Text>
                            <a href="mailto:jeli@jeli.pl">
                              <Text className={classes.icons_description}>
                                jeli@jeli.pl
                              </Text>
                            </a>
                          </div>
                        </div>

                      <div className={classes.icons_wrapper}>
                        <Box mr="md">
                          <IconMapPin style={{ width: rem(24), height: rem(24) }} />
                        </Box>
                        <div>
                          <Text size="xs" className={classes.icons_title}>
                            {t("address_title")}
                          </Text>
                          <Text className={classes.icons_description}>
                            {t("address")}
                          </Text>
                        </div>
                      </div>

                      <div className={classes.icons_wrapper}>
                        <Box mr="md">
                          <IconSun style={{ width: rem(24), height: rem(24) }} />
                        </Box>
                        <div>
                          <Text size="xs" className={classes.icons_title}>
                            {t("working_hours_title")}
                          </Text>
                          <Text className={classes.icons_description}>
                            {t("working_hours")}
                          </Text>
                        </div>
                      </div>
                    </Stack>
        
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