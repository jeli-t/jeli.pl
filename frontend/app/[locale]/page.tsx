import classes from './page.module.css'
import { Container } from '@mantine/core';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { AboutPreview } from '@/components/AboutPreview/AboutPreview';
import { WhatDoIDo } from '@/components/WhatDoIDo/WhatDoIDo';
import { CallToAction } from '@/components/CallToAction/CallToAction';
import { PortfolioPreview } from '@/components/PortfolioPreview/PortfolioPreview';
import { ProductsPreview } from '@/components/ProductsPreview/ProductsPreview';
import {getTranslations} from 'next-intl/server';


export async function generateMetadata() {
  const t = await getTranslations('SEO');

  return {
    title: t('home_page_title'),
    description: t('home_page_description')
  };
}


export default function Home() {

  return (
    <Container fluid p={0}>
      <HeroSection></HeroSection>
      <WhatDoIDo></WhatDoIDo>
      <ProductsPreview></ProductsPreview>
      <PortfolioPreview></PortfolioPreview>
      <AboutPreview></AboutPreview>
      <CallToAction></CallToAction>
    </Container>
  )
}
