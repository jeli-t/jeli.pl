'use client';

import { useState } from 'react';
import { UnstyledButton, Menu, Group } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Image from 'next/image'
import English from './images/english.png';
import Polish from './images/polish.png';
import classes from './LanguagePicker.module.css';
import {Link} from '../../navigation';


const data = [
  { label: 'English', image: English, locale: "en" },
  { label: 'Polish', image: Polish, locale: "pl" },
];


export function LanguagePicker({ currentLocale }: { currentLocale: string }) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data.find(d => d.locale === currentLocale));

  const items = data.map((item) => (
    <Link href="/" locale={item.locale} className={classes.link}>
      <Menu.Item
        leftSection={<Image alt="Flag" src={item.image} width={18} height={18} />}
        onClick={() => setSelected(item)}
        key={item.label}
      >
          {item.label}
      </Menu.Item>
    </Link>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group className={classes.current}>
            <Image src={selected.image} alt="Flag" width={22} height={22} />
            <span className={classes.label} data-expanded={opened || undefined}>{selected.label}</span>
          </Group>
          <IconChevronDown size="1rem" className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {items}
      </Menu.Dropdown>
    </Menu>
  );
}