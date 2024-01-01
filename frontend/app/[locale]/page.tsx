import classes from './page.module.css'
import { Container } from '@mantine/core';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { AboutPreview } from '@/components/AboutPreview/AboutPreview';
import { WhatIOffer } from '@/components/WhatIOffer/WhatIOffer';
import { CallToAction } from '@/components/CallToAction/CallToAction';
import { PortfolioPreview } from '@/components/PortfolioPreview/PortfolioPreview';


export default function Home() {

  return (
    <Container fluid p={0}>
      <HeroSection></HeroSection>
      <WhatIOffer></WhatIOffer>
      <AboutPreview></AboutPreview>
      <PortfolioPreview></PortfolioPreview>
      <CallToAction></CallToAction>
    </Container>
  )
}
