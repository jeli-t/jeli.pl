'use client';

import { Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMenu.module.css';
import { usePathname } from 'next/navigation'
import { useCallback, useEffect } from 'react';


export function BurgerMenu({ children } : any) {
  const [opened, { open, close }] = useDisclosure(false);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    return close();
  }, [ close ]);

  useEffect(() => {
    closeMenu();
  }, [ pathname, closeMenu ]);
  
  return (
    <>
      <Burger opened={opened} onClick={open} size="sm" hiddenFrom="sm" />
      <Drawer opened={opened} onClose={close} position='bottom' withCloseButton={false} size={"calc(100% - 56px)"} overlayProps={{backgroundOpacity: 0}}>
        {children}
      </Drawer>
    </>
  );
}