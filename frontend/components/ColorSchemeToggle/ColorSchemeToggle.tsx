'use client';

import { Switch, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import classes from './ColorSchemeToggle.module.css';
import { useState, useEffect } from 'react'


export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({keepTransitions: true});
  const theme = useMantineTheme();
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient ?
        <Switch
          checked={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
          size="lg"
          color='gray'
          onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
          offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
          className={classes.switch}
        />
        :
        <Switch
          onChange={() => toggleColorScheme()}
          size="lg"
          color='gray'
          onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
          offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
          className={classes.switch}
        />
      }
    </>
  );
}