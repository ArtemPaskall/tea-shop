'use client'
import { useI18n } from '../../../../../locales/client'

export default function Tea() {
  const t = useI18n()

  return (
    <>
      <h1 className="text-sky-400 italic">{t('tea')}</h1>
    </>
  )
}
