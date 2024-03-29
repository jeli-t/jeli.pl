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
    ActionIcon,
} from '@mantine/core';
import { IconSun, IconMapPin, IconMail, IconBrandLinkedin, IconBrandInstagram, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';
import classes from './ContactMe.module.css';
import { useTranslations } from 'next-intl';
import { ContactForm } from './ContactForm';


export function ContactMe() {
    const t = useTranslations('ContactMe');

    const form_translations = {
      email_placeholder: t("email_placeholder"),
      email_error: t("email_error"),
      name: t("name"),
      name_placeholder: t("name_placeholder"),
      message: t("message"),
      message_placeholder: t("message_placeholder"),
      message_error: t("message_error"),
      button: t("button"),
      email_sent: t("email_sent"),
      form_error: t("form_error"),
    };

    return (
        <Container fluid className={classes.component}>
            <div className={classes.wrapper}>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                <div>
                    <Title className={classes.title}>
                      {t("contact")}
                    </Title>
                    <Text className={classes.description} mt="sm" mb={20}>
                      {t("content")}
                    </Text>
                    <Group mb={20} gap={10} justify="flex-start" wrap="nowrap">
                      <ActionIcon component='a' href="" size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter style={{ width: rem(36), height: rem(36) }} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon component='a' href="https://www.linkedin.com/in/tomasz-jelito/" size="lg" color="gray" variant="subtle">
                        <IconBrandLinkedin style={{ width: rem(36), height: rem(36) }} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon component='a' href="" size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram style={{ width: rem(36), height: rem(36) }} stroke={1.5} />
                      </ActionIcon>
                      <ActionIcon component='a' href="" size="lg" color="gray" variant="subtle">
                        <IconBrandGithub style={{ width: rem(36), height: rem(36) }} stroke={1.5} />
                      </ActionIcon>
                    </Group>
                    <Stack>
                        <div className={classes.icons_wrapper}>
                          <Box mr="md">
                            <IconMail style={{ width: rem(24), height: rem(24) }} />
                          </Box>
                          <div>
                            <Text size="xs" className={classes.icons_title}>
                              Email
                            </Text>
                            <a href="mailto:jeli@jeli.pl" style={{textDecoration: "none"}}>
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
                  <ContactForm translations={form_translations}></ContactForm>
                </div>
                </SimpleGrid>
            </div>
        </Container>
    );
  }