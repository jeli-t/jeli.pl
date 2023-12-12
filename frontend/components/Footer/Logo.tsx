'use client';

import { useMantineColorScheme } from '@mantine/core';
import Image from 'next/image'
import logoDark from './logoDark.png';
import logoLight from './logoLight.png';
import {Link} from '../../navigation';


export function Logo() {
    const theme = useMantineColorScheme();

    return (
        <Link href='/' >
            {theme.colorScheme === 'light' ? <Image src={logoDark} alt="Jeli.pl" title='Jeli.pl' loading='eager' height='50' /> : <Image src={logoLight} alt="Jeli.pl" title='Jeli.pl' loading='eager' height='50' />}
        </Link>
    );
}