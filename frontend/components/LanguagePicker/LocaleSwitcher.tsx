import { useLocale } from 'next-intl';
import { LanguagePicker } from './LanguagePicker';

export function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LanguagePicker currentLocale={locale}>
    </LanguagePicker>
  );
}