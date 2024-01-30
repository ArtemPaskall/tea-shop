'use client'
import { useI18n } from '../../../../../locales/client'

export default function Coffee() {
  const t = useI18n()

  return <h1>{t('coffee')}</h1>
}
