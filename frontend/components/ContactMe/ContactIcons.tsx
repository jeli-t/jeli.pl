import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';
import { useTranslations } from 'next-intl';


interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  const t = useTranslations('ContactMe');

  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'jeli@jeli.pl', icon: IconAt },
  { title: 'Addres', description: 'Working remotely', icon: IconMapPin },
  { title: 'Working hours', description: 'When I get up - when I go to sleep', icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}