'use client';

import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMenu.module.css';


export function BurgerButton() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
  );
}