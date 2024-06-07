'use client';

import { useComputedColorScheme } from '@mantine/core';
import Image from 'next/image'
import logoDark from './logoDark.png';
import logoLight from './logoLight.png';
import { Link } from 'next-view-transitions'
import { useState, useEffect } from 'react'


export function Logo() {
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])

    return (
        <>
            {isClient ?
                <Link href='/' >
                    {computedColorScheme === 'light' ? <Image src={logoDark} alt="Jeli.pl" title='Jeli.pl' loading='eager' height='50' /> : <Image src={logoLight} alt="Jeli.pl" title='Jeli.pl' loading='eager' height='50' />}
                </Link>
                :
                <Link href='/' >
                    <Image src={logoLight} alt="Jeli.pl" title='Jeli.pl' loading='eager' height='50' />
                </Link>
            }
        </>
    );
}