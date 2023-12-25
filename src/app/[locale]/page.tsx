'use client';

import styles from './page.module.scss';
import { Locale } from '@/../../types';
import { useCurrentLocale, useI18n } from '../../../locales/client';

export default function Home() {
  const t = useI18n();
  const cuurentLocale = useCurrentLocale();

  return (
    <>
      <h1>{t('helloWorld')}</h1>
      <h1>{cuurentLocale}</h1>
    </>
  );
}