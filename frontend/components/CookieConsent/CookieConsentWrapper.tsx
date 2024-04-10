import {useTranslations} from 'next-intl';
import { CookieConsent } from './CookieConsent';
import { Text, Group } from '@mantine/core';
import {Link} from '@/navigation';


export function CookieConsentWrapper() {
  const t = useTranslations('CookieConsent');

  return (
    <CookieConsent>
      <Group justify="space-between" mb="xs">
        <Text fz="md" fw={600}>
          {t("title")}
        </Text>
      </Group>
      <Text fz="sm" mb={10}>
        {t("description")}
      </Text>
      <Link href="/privacy">
        {t("privacy")}
      </Link>
    </CookieConsent>
  );
}