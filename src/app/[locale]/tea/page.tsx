'use client'
import { useI18n } from '../../../../locales/client'

export default function Tea() {
 const t = useI18n()

  return (
    <h1>{t('tea')}</h1>
  )
}
