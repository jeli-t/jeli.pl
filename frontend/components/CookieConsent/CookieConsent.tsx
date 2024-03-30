'use client';

import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import classes from './CookieConsent.module.css';
import { Button, Paper, Text, Group, Container } from '@mantine/core';


export function CookieConsent({ children } : any) {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <Container className={classes.banner} size={"xs"}>
      <Paper withBorder p="lg" radius="lg" shadow="xl">
        {children}
        <Group justify="flex-end" mt="md">
          <Button onClick={() => acceptCookie()} variant="outline" size="sm">
              OK
          </Button>
        </Group>
      </Paper>
    </Container>
  );
};
