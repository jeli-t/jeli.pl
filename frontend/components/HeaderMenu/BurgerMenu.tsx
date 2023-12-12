'use client';

import { Burger, Drawer, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMenu.module.css';


export function BurgerMenu({ children } : any) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
      <Drawer opened={opened} onClose={toggle} position='bottom' withCloseButton={false} size={"calc(100% - 56px)"} overlayProps={{backgroundOpacity: 0}}>
        {children}
      </Drawer>
    </>
  );
}