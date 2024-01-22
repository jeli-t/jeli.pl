import styles from './page.module.css'
import { Container } from '@mantine/core';
import { PrivacyPolicy } from '@/components/PrivacyPolicy/PrivacyPolicy';
import { PolitykaPrywatnosci } from '@/components/PrivacyPolicy/PolitykaPrywatnosci';


interface PrivacyProps {
  params: {
    locale: string;
  };
}

export default function Privacy({ params: { locale } }: PrivacyProps) {
  if(locale == "pl") {
    return (
      <Container fluid p={0}>
        <PolitykaPrywatnosci></PolitykaPrywatnosci>
      </Container>
    )
  } else {
    return (
      <Container fluid p={0}>
        <PrivacyPolicy></PrivacyPolicy>
      </Container>
    )
  }
}
